import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
import { useState } from 'react';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p className="error">{error}</p>}

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setError('');
          getAll()
            .then(setGoods)
            .catch(() => setError('Unable to load goods'));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setError('');
          get5First()
            .then(setGoods)
            .catch(() => setError('Unable to load goods'));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setError('');
          getRedGoods()
            .then(setGoods)
            .catch(() => setError('Unable to load goods'));
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
