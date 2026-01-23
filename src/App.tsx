import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAll = useCallback(async () => {
    setError(null);
    try {
      const data = await goodsAPI.getAll();

      setGoods(data);
    } catch (err) {
      setError('Something went wrong while loading all goods');
    }
  }, []);

  const loadFirstFive = useCallback(async () => {
    setError(null);
    try {
      const data = await goodsAPI.get5First();

      setGoods(data);
    } catch (err) {
      setError('Something went wrong while loading first five goods');
    }
  }, []);

  const loadRed = useCallback(async () => {
    setError(null);
    try {
      const data = await goodsAPI.getRedGoods();

      setGoods(data);
    } catch (err) {
      setError('Something went wrong while loading red goods');
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button type="button" data-cy="all-button" onClick={loadAll}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={loadFirstFive}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={loadRed}>
          Load red goods
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
