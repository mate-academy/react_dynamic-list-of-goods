import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAllGoods = useCallback(() => {
    getAll()
      .then(setGoodsList)
      .catch(() => setErrorMessage('Unexpected error, please try again later'));
  }, []);

  const handle5First = useCallback(() => {
    get5First()
      .then(setGoodsList)
      .catch(() => setErrorMessage('Unexpected error, please try again later'));
  }, []);

  const handleSetRedGoods = useCallback(() => {
    getRedGoods()
      .then(setGoodsList)
      .catch(() => setErrorMessage('Unexpected error, please try again later'));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handle5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleSetRedGoods}>
        Load red goods
      </button>

      {errorMessage ? <p>{errorMessage}</p> : <GoodsList goods={goodsList} />}
    </div>
  );
};
