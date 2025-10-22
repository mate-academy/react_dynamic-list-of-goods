import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = () => {
    getAll()
      .then(data => {
        setGoods(data);
      })
      .catch(() => {
        setError('Failed to load all goods');
      });
  };

  const handleLoadFive = () => {
    get5First()
      .then(data => {
        setGoods(data);
      })
      .catch(() => {
        setError('Failed to load five goods');
      });
  };

  const handleLoadRed = () => {
    getRedGoods()
      .then(data => {
        setGoods(data);
      })
      .catch(() => {
        setError('Failed to load red goods 😢');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {error && <p className="error-message">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
