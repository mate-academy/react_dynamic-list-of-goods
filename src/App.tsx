import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAll = async () => {
    try {
      const allGoods = await goodsAPI.getAll();
      setGoods(allGoods);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load all goods');
    }
  };

  const loadFiveFirst = async () => {
    try {
      const first5 = await goodsAPI.getFiveFirst();
      setGoods(first5);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load first 5 goods');
    }
  };

  const loadRed = async () => {
    try {
      const redGoods = await goodsAPI.getRed();
      setGoods(redGoods);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load red goods');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p className="error">{error}</p>}

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFiveFirst}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
