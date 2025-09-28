import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import {
  getAllGoods,
  getFirstFiveSortedByName,
  getRedGoods,
} from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getAllGoods();

      setGoods(data);
    } catch {
      setError('Failed to load goods.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadFirstFive = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getFirstFiveSortedByName();

      setGoods(data);
    } catch {
      setError('Failed to load first five goods.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadRed = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch {
      setError('Failed to load red goods.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAll}
        disabled={isLoading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
        disabled={isLoading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRed}
        disabled={isLoading}
      >
        Load red goods
      </button>

      {error && <p className="error">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
