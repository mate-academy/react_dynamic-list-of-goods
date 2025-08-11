import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const handleLoadAllGoods = () => {
    setError(null);
    getAll()
      .then(setGoods)
      .catch(() => setError('Failed to load goods'));
  };

  const handleLoad5FirstGoods = () => {
    setError(null);
    get5First()
      .then(setGoods)
      .catch(() => setError('Failed to load first 5 goods'));
  };

  const handleLoadRedGoods = () => {
    setError(null);
    getRed()
      .then(setGoods)
      .catch(() => setError('Failed to load red goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      {error && <p className="error">{error}</p>}
      {goods.length === 0 && !error && <p className="empty">No goods found</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
