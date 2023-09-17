import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string>('');

  const loadAll = () => {
    getAll()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      })
      .catch(() => setError('Something went wrong'));
  };

  const load5First = () => {
    get5First()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      })
      .catch(() => setError('Something went wrong'));
  };

  const loadRed = () => {
    getRed()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      })
      .catch(() => setError('Something went wrong'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRed}
      >
        Load red goods
      </button>
      {error && <p className="error-message">{error}</p> }
      <GoodsList goods={goods} />
    </div>
  );
};
