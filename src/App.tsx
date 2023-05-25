import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const handleClick = () => {
    setError('');
    getAll().then((receivedGoods) => setGoods(receivedGoods));
  };

  const handle5FirstClick = () => {
    setError('');
    get5First().then((receivedGoods) => setGoods(receivedGoods))
      .catch(() => setError('Something went wrong'));
  };

  const handleRedClick = () => {
    setError('');
    getRedGoods().then((receivedGoods) => setGoods(receivedGoods))
      .catch(() => setError('Something went wrong'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p>{error}</p>}

      <button type="button" data-cy="all-button" onClick={handleClick}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
