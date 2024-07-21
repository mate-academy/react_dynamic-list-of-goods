import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadGoods = (loadFunction: () => Promise<Good[]>) => {
    setError(null);
    loadFunction()
      .then(setGoods)
      .catch(err => {
        // eslint-disable-next-line
        console.error(err);
        setError('Failed to load goods');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleLoadGoods(getAll);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleLoadGoods(get5First);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleLoadGoods(getRedGoods);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
