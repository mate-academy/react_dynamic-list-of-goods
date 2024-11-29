import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Selector } from './types/Selector';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selector, setSelector] = useState<Selector>('all');

  useEffect(() => {
    const fetchGoods = () => {
      let fetchFunction: () => Promise<Good[]>;

      switch (selector) {
        case 'all':
          fetchFunction = getAll;
          break;
        case 'first 5':
          fetchFunction = get5First;
          break;
        case 'red only':
          fetchFunction = getRedGoods;
          break;
        default:
          fetchFunction = getAll;
      }

      fetchFunction().then(data => setGoods(data));
    };

    fetchGoods();
  }, [selector]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSelector('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSelector('first 5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSelector('red only')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
