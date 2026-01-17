import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadAllGoods = async () => {
    try {
      setError('');
      const goodsFromServer = await getAll();

      setGoods(goodsFromServer);
    } catch (e) {
      setError('Something went wrong');
    }
  };

  const loadFirst5Goods = async () => {
    try {
      setError('');
      const goodsFromServer = await get5First();

      setGoods(goodsFromServer);
    } catch (e) {
      setError('Something went wrong');
    }
  };

  const loadRedGoods = async () => {
    try {
      setError('');
      const goodsFromServer = await getRed();

      setGoods(goodsFromServer);
    } catch (e) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirst5Goods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      {error && <p className="App__error">{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
