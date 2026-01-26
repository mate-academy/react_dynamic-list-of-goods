import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const allGoods = () => {
    setError(null);

    getAll()
    .then(setGoods)
    .catch(error => setError(`Error: ${error.message}`));
  };

  const firstFiveGoods = () => {
    setError(null);

    get5First()
    .then(setGoods)
    .catch(error => setError(`Error: ${error.message}`));;
  };

  const redGoods = () => {
    setError(null);

    getRedGoods().then(setGoods)
    .catch(error => setError(`Error: ${error.message}`));;
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={allGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={firstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redGoods}>
        Load red goods
      </button>

      {error && <div className="error">{error}</div>}
      <GoodsList goods={goods} />
    </div>
  );
};
