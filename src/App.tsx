import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const getOnClick = (type: string): void => {
    switch (type) {
      case 'getAll':
        getAll().then(setGoods);
        break;
      case 'getFive':
        get5First().then(setGoods);
        break;
      case 'getRed':
        getRedGoods().then(setGoods);
        break;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getOnClick('getAll')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => getOnClick('getFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getOnClick('getRed')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
