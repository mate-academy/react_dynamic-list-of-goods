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

  const handleGetAll = async () => {
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
      setError(null);
    } catch (e) {
      setError('Failed to fetch goods');
    }
  };

  const handleGet5First = async () => {
    try {
      const first5Goods = await get5First();

      setGoods(first5Goods);
      setError(null);
    } catch (e) {
      setError('Failed to get 5 first goods');
    }
  };

  const handleGetRedGoods = async () => {
    try {
      const redGoods = await getRedGoods();

      setGoods(redGoods);
      setError(null);
    } catch (e) {
      setError('Failed to get red goods');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      {error && <div className="error">{error}</div>}

      <GoodsList goods={goods} />
    </div>
  );
};
