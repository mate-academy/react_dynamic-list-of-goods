import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAll = () => {
    getAll()
      .then(data => {
        setGoods(data);
        setError(null);
      })
      .catch(() => {
        setError('Failed to load goods');
        setGoods([]);
      });
  };

  const loadFirstFive = () => {
    get5First()
      .then(data => {
        setGoods(data);
        setError(null);
      })
      .catch(() => {
        setError('Failed to load goods');
        setGoods([]);
      });
  };

  const loadRed = () => {
    getRedGoods()
      .then(data => {
        setGoods(data);
        setError(null);
      })
      .catch(() => {
        setError('Failed to load goods');
        setGoods([]);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAll} data-cy="all-button">
        Load all goods
      </button>

      <button type="button" onClick={loadFirstFive} data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" onClick={loadRed} data-cy="red-button">
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
