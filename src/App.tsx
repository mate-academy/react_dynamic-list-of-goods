import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAll = () => {
    setError(null);
    getAll()
      .then(setGoods)
      .catch(err => {
        setError(`Failed to load all goods: ${err}`);
      });
  };

  const loadFirst5 = () => {
    setError(null);
    get5First()
      .then(setGoods)
      .catch(err => {
        setError(`Failed to load all goods: ${err}`);
      });
  };

  const loadRed = () => {
    setError(null);
    getRedGoods()
      .then(setGoods)
      .catch(err => {
        setError(`Failed to load all goods: ${err}`);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p className="has-text-danger">{error}</p>}

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirst5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
