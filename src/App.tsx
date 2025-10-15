import React, { useCallback, useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handlerAllGoods = useCallback(() => {
    goodsAPI
      .getAll()
      .then(g => {
        setGoods(g);
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  const handlerFiveFirst = useCallback(() => {
    goodsAPI
      .get5First()
      .then(g => {
        setGoods(g);
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  const handlerRedColorGoods = useCallback(() => {
    goodsAPI
      .getRedGoods()
      .then(g => {
        setGoods(g);
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handlerAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlerFiveFirst}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handlerRedColorGoods}>
        Load red goods
      </button>

      {errorMessage && (
        <p className="error" style={{ color: 'red' }}>
          {errorMessage}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
