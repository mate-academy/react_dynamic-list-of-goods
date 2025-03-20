import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

const goodsConditions = {
  all: getAll,
  first5: get5First,
  allRed: getRedGoods,
};

type GoodCondition = 'all' | 'first5' | 'allRed';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);

  const filterGoods = useCallback((condition: GoodCondition) => {
    goodsConditions[condition]().then(setGoods);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => filterGoods('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => filterGoods('first5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => filterGoods('allRed')}
      >
        Load red goods
      </button>

      {goods.length !== 0 && <GoodsList goods={goods} />}
    </div>
  );
};
