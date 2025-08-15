import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = async () => {
    try {
      const data = await getAll();

      setGoods(data);
      setError(null);
    } catch (e) {
      setError('Failed to load goods');
    } finally {
    }
  };

  const handleLoad5First = async () => {
    try {
      const data = await get5First();

      setGoods(data);
      setError(null);
    } catch (e) {
      setError('Failed to load goods');
    } finally {
    }
  };

  const handleLoadRed = async () => {
    try {
      const data = await getRedGoods();

      setGoods(data);
      setError(null);
    } catch (e) {
      setError('Failed to load goods');
    } finally {
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

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {error && <p className="error">{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
