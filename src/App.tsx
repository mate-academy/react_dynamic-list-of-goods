import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAll = () => {
    setError(null);
    getAll()
      .then(setGoods)
      .catch(err => setError(err.message));
  };

  const loadFirst5 = () => {
    setError(null);
    get5First()
      .then(setGoods)
      .catch(err => setError(err.message));
  };

  const loadRed = () => {
    setError(null);
    getRedGoods()
      .then(setGoods)
      .catch(err => setError(err.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button data-cy="all-button" onClick={loadAll} type="button">
        Load all goods
      </button>
      <button data-cy="first-five-button" onClick={loadFirst5} type="button">
        Load 5 first goods
      </button>
      <button data-cy="red-button" onClick={loadRed} type="button">
        Load red goods
      </button>

      {error && <div className="error">{error}</div>}

      <GoodsList goods={goods} />
    </div>
  );
};
