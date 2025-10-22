import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = async () => {
    try {
      setError(null);
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch (errors) {
      setError('Failed to show all goods');
    }
  };

  const handleLoad5First = async () => {
    try {
      setError(null);
      const first5Goods = await get5First();

      setGoods(first5Goods);
    } catch (errors) {
      setError('Failed to show first 5 goods');
    }
  };

  const handleLoadRedGoods = async () => {
    try {
      setError(null);
      const redGoods = await getRedGoods();

      setGoods(redGoods);
    } catch (errors) {
      setError('Failed to show red goods');
    }
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
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      {error && <p data-cy="error-message">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
