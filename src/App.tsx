import './App.scss';
import { GoodsList } from './GoodsList';
import React, { useState } from 'react';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = async () => {
    try {
      const allGoods = await goodsAPI.getAll();

      setGoods(allGoods);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load goods');
    }
  };

  const handleLoadFirstFive = async () => {
    try {
      const fiveFirst = await goodsAPI.get5First();

      setGoods(fiveFirst);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load goods');
    }
  };

  const handleLoadRed = async () => {
    try {
      const red = await goodsAPI.getRedGoods();

      setGoods(red);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load goods');
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
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {error && <div className="error">{error}</div>}

      <GoodsList goods={goods} />
    </div>
  );
};
