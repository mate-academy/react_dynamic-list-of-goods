import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState([]);
  const [error, setError] = useState(false);

  const loadAllGoods = () => {
    setError(false);
    getAll()
      .then(setGoods)
      .catch(() => setError(true));
  };

  const load5Goods = () => {
    setError(false);
    get5First()
      .then(setGoods)
      .catch(() => setError(true));
  };

  const loadRedGoods = () => {
    setError(false);
    getRedGoods()
      .then(setGoods)
      .catch(() => setError(true));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={loadAllGoods} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={load5Goods} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={loadRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      {error && <p>Error!!!</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
