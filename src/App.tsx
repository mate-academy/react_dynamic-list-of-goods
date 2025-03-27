import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string>('');

  const handleAllGoods = () => {
    getAll()
      .then(data => {
        setGoods(data);
        setError('');
      })
      .catch(() => setError('Failed to load all goods. Please try again.'));
  };

  const handleFirstGoods = () => {
    get5First()
      .then(data => {
        setGoods(data);
        setError('');
      })
      .catch(() => setError('Failed to load first 5 goods. Please try again.'));
  };

  const handleRedGoods = () => {
    getRedGoods()
      .then(data => {
        setGoods(data);
        setError('');
      })
      .catch(() => setError('Failed to load red goods. Please try again.'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      {error && <div className="error">{error}</div>}
      <GoodsList goods={goods} />
    </div>
  );
};
