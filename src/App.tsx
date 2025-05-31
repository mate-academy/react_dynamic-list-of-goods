import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGetAll = useCallback(() => {
    getAll()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }, []);

  const handleGet5First = useCallback(() => {
    get5First()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }, []);

  const handleGetRedGoods = useCallback(() => {
    getRedGoods()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};
