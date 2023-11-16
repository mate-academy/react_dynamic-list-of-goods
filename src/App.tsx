import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

type SortType = 'All' | '5First' | 'Red';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function getPreparedGoods(type: SortType) {
    switch (type) {
      case 'All':
        return getAll().then(setGoods);
      case '5First':
        return get5First().then(setGoods);
      case 'Red':
        return getRedGoods().then(setGoods);
      default: return null;
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getPreparedGoods('All')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => getPreparedGoods('5First')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getPreparedGoods('Red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
