import React, { useMemo, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

// eslint-disable-next-line @typescript-eslint/naming-convention
type goodsStyle = 'All' | 'FirstFive' | 'Reds';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [goodFilter, setGoodFilter] = useState<goodsStyle | null>(null);

  useMemo(() => {
    switch (goodFilter) {
      case 'All':
        getAll().then(setGoods);
        break;
      case 'FirstFive':
        get5First().then(setGoods);
        break;
      case 'Reds':
        getRedGoods().then(setGoods);
        break;

      default:
        break;
    }
  }, [goodFilter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => setGoodFilter('All')}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => setGoodFilter('FirstFive')}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => setGoodFilter('Reds')}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
