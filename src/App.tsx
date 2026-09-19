import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadAllGoods = () => {
    setError('');

    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => {
        setError('Unable to load goods');
      });
  };

  const load5FirstGoods = () => {
    setError('');

    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => {
        setError('Unable to load goods');
      });
  };

  const loadRedGoods = () => {
    setError('');

    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => {
        setError('Unable to load goods');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {error && <p>{error}</p>}

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
