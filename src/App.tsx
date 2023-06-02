import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadAll = async () => {
    const allGoods = await goodsAPI.getAll();

    setGoods(allGoods);
  };

  const loadFirst5Goods = async () => {
    const first5Goods = await goodsAPI.get5First();

    setGoods(first5Goods || []);
  };

  const loadRedGoods = async () => {
    const getRedGoods = await goodsAPI.getRedGoods();

    setGoods(getRedGoods);
  };

  const handleLoadAll = () => {
    loadAll().then(() => setError('')).catch(err => setError(`The following error occured: ${err}`));
  };

  const handleLoadFirst5Goods = () => {
    loadFirst5Goods().then(() => setError('')).catch(err => setError(`The following error occured: ${err}`));
  };

  const handleLoadRedGoods = () => {
    loadRedGoods().then(() => setError('')).catch(err => setError(`The following error occured: ${err}`));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {error && <p>{error}</p>}
    </div>
  );
};
