import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLoadAll = async () => {
    setLoading(true);
    try {
      setGoods(await getAll());
    } catch (error) {
      setGoods([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadFirst5 = async () => {
    setLoading(true);
    try {
      setGoods(await get5First());
    } catch {
      setGoods([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterRed = async () => {
    setLoading(true);
    try {
      setGoods(await getRedGoods());
    } catch {
      setGoods([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAll}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleFilterRed}
        disabled={loading}
      >
        Load red goods
      </button>

      {loading ? <p>Loading...</p> : <GoodsList goods={goods} />}
    </div>
  );
};