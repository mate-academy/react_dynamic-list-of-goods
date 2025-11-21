import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadAll = async () => {
    try {
      setError('');
      const allGoods = await goodsAPI.getAll();

      setGoods(allGoods);
    } catch {
      setError('Failed to load goods');
    }
  };

  const loadFirstFive = async () => {
    try {
      setError('');
      const result = await goodsAPI.get5First();

      setGoods(result);
    } catch {
      setError('Failed to load goods');
    }
  };

  const loadRed = async () => {
    try {
      setError('');
      const result = await goodsAPI.getRed();

      setGoods(result);
    } catch {
      setError('Failed to load goods');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
