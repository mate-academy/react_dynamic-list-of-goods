import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadAllGoods = useCallback(() => {
    getAll()
      .then(loadedGoods => {
        setGoods(loadedGoods);
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  const loadFirstFive = useCallback(() => {
    get5First()
      .then(firstGoods => {
        setGoods(firstGoods);
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  const loadRedGoods = useCallback(() => {
    getRedGoods()
      .then(redGoods => {
        setGoods(redGoods);
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {errorMessage && <p className="notification is-danger">{errorMessage}</p>}
    </div>
  );
};
