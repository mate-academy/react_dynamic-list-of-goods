import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { Good } from './types/Good';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleAll = () => {
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch((err: { message: string | null }) =>
        setError(err.message || 'Something went wrong'),
      );
  };

  const handle5First = () => {
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch((err: { message: string | null }) =>
        setError(err.message || 'Something went wrong'),
      );
  };

  const handleRed = () => {
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch((err: { message: string | null }) =>
        setError(err.message || 'Something went wrong'),
      );
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="button" data-cy="all-button" onClick={handleAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handle5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
