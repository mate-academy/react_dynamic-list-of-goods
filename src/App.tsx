import React, { useState, useEffect } from 'react';

import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [data, setData] = useState<Good[]>([]);
  const [fetchType, setFetchType] = useState<'all' | 'first5' | 'red' | null>(
    null,
  );

  useEffect(() => {
    if (fetchType === 'all') {
      getAll().then(setData);
    } else if (fetchType === 'first5') {
      get5First().then(setData);
    } else if (fetchType === 'red') {
      getRedGoods().then(setData);
    }
  }, [fetchType]);

  const handleClick = (type: 'all' | 'first5' | 'red') => {
    setFetchType(type);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => handleClick('all')}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => handleClick('first5')}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => handleClick('red')}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={data} />
    </div>
  );
};
