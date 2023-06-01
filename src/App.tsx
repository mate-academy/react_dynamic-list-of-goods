import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [list, setList] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const handleClick = () => {
    setError('');
    getAll().then((receivedGoods) => setList(receivedGoods));
  };

  const handle5FirstClick = () => {
    setError('');
    get5First().then((receivedGoods) => setList(receivedGoods))
      .catch(() => setError('Could not load goods'));
  };

  const handleRedClick = () => {
    setError('');
    getRedGoods().then((receivedGoods) => setList(receivedGoods))
      .catch(() => setError('Could not load goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p>{error}</p>}

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClick}
      >
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

      <GoodsList goods={list} />
    </div>
  )
};
