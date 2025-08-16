import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loadField, setLoadField] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (loadField === 'ALL') {
      getAll()
        .then(setGoods)
        .catch(error => setErrorMessage(error.message));
    } else if (loadField === 'COLOR') {
      getRedGoods()
        .then(setGoods)
        .catch(error => setErrorMessage(error.message));
    } else if (loadField === 'TOP5') {
      get5First()
        .then(setGoods)
        .catch(error => setErrorMessage(error.message));
    }
  }, [loadField]);

  const clickHandle = (type: string) => {
    setLoadField(type);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => clickHandle('ALL')}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => clickHandle('TOP5')}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => clickHandle('COLOR')}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      {errorMessage ? <p>{errorMessage}</p> : <GoodsList goods={goods} />}
    </div>
  );
};
