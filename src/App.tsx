import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const fetchAllGoods = () => {
    getAll()
      .then(setGoods)
      .catch(() => setError('Error while getting data'));
  };

  const fetchFiveGoods = () => {
    get5First()
      .then(setGoods)
      .catch(() => setError('Error while getting data'));
  };

  const fetchRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => setError('Error while getting data'));
  };

  useEffect(() => {
    fetchAllGoods();
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={fetchAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={fetchFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={fetchRedGoods}
      >
        Load red goods
      </button>

      {error && <p className="error-message">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
