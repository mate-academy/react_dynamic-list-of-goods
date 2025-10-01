import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = useCallback(async () => {
    setError(null);
    try {
      setGoods(await getAll());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load goods');
    }
  }, []);

  const handleLoadFirstFive = useCallback(async () => {
    setError(null);
    try {
      setGoods(await get5First());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load goods');
    }
  }, []);

  const handleLoadRed = useCallback(async () => {
    setError(null);
    try {
      setGoods(await getRedGoods());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load goods');
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>
      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>
      {error && (
        <div style={{ color: 'red', margin: '1em 0' }} data-cy="error-message">
          {error}
        </div>
      )}
      <GoodsList goods={goods} />
    </div>
  );
};
