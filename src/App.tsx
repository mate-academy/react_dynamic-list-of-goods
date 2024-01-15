import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);

  const handleClick = (filter: string) => {
    switch (filter) {
      case 'all-button':
        getAll().then(setGoods);
        break;
      case 'first-five-button':
        get5First().then(setGoods);
        break;
      case 'red-button':
        getRedGoods().then(setGoods);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick('all-button')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick('first-five-button')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick('red-button')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
