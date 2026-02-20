import React from 'react';
import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setIsLoading(true);
          setErrorMessage('');

          getAll()
            .then(result => setGoods(result))
            .catch(error1 => setErrorMessage(error1.message))
            .finally(() => setIsLoading(false));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setIsLoading(true);
          setErrorMessage('');

          get5First()
            .then(result => setGoods(result))
            .catch(error1 => setErrorMessage(error1.message))
            .finally(() => setIsLoading(false));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setIsLoading(true);
          setErrorMessage('');

          getRedGoods()
            .then(result => setGoods(result))
            .catch(error1 => setErrorMessage(error1.message))
            .finally(() => setIsLoading(false));
        }}
      >
        Load red goods
      </button>

      {isLoading && <p>Loading...</p>}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
