import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleAll = () => {
    setError(null);
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(err => setError(err.message || 'Something went wrong'));
  };

  const handleFirstFive = () => {
    setError(null);
    goodsAPI
      .getFirstFive()
      .then(setGoods)
      .catch((err: { message: string | null }) =>
        setError(err.message || 'Something went wrong'),
      );
  };

  const handleRedButton = () => {
    setError(null);
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(err => setError(err.message || 'Something went wrong'));
  };

  return (
    <div className="App">
      {error !== null && <div className="error">{error}</div>}

      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={handleAll} data-cy="all-button">
        Load all goods
      </button>

      <button
        type="button"
        onClick={handleFirstFive}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button type="button" onClick={handleRedButton} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
