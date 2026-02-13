import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = useCallback(() => {
    setError(null);

    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => {
        setError('Something went wrong');
        setGoods([]);
      });
  }, []);

  const handleLoadFirstFive = useCallback(() => {
    setError(null);

    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => {
        setError('Something went wrong');
        setGoods([]);
      });
  }, []);

  const handleLoadRed = useCallback(() => {
    setError(null);

    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => {
        setError('Something went wrong');
        setGoods([]);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {error && <p data-cy="error">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
