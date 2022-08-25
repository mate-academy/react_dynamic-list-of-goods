import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const request = (way: string) => {
    switch (way) {
      case 'all':
        getAll()
          .then(setGoods);
        break;

      case 'first 5':
        get5First()
          .then(setGoods);
        break;

      case 'red':
        getRedGoods()
          .then(setGoods);
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
        onClick={() => request('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => request('first 5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => request('red')}
      >
        Load red goods
      </button>

      {goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
