import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [fetchType, setFetchType] = useState('');

  const handleClick = (type: 'all' | 'first5' | 'red') => {
    setFetchType(type);
  };

  useEffect(() => {
    if (fetchType === 'all') {
      getAll().then(setGoods);
    } else if (fetchType === 'first5') {
      get5First().then(setGoods);
    } else if (fetchType === 'red') {
      getRed().then(setGoods);
    }
  }, [fetchType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => handleClick('all')}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => handleClick('first5')}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => handleClick('red')}
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
