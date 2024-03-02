import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGoods = (type: string) => {
    switch (type) {
      case 'all':
        getAll().then(setGoods);
        break;
      case 'five':
        get5First().then(setGoods);
        break;
      case 'red':
        getRedGoods().then(setGoods);
        break;
      default:
        throw new Error('some error');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoods('all')}
      >
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoods('five')}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoods('red')}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
