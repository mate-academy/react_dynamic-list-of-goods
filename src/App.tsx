import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string>('');
  const loadAllGoods = async () => {
    try {
      await getAll().then(setGoods);
    } catch (err) {
      setError('Failed to load goods');
    }
  };

  const loadFiveGoods = async () => {
    try {
      await get5First().then(setGoods);
    } catch (err) {
      setError('Failed to load first five goods');
    }
  };

  const loadRedGoods = async () => {
    try {
      await getRedGoods().then(setGoods);
    } catch (err) {
      setError('Failed to load red goods');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFiveGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {error && <p>{error}</p>}
    </div>
  );
};
