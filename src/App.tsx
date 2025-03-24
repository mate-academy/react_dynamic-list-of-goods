import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() =>
          getAll()
            .then(setGoods)
            .catch(error => {
              setErrorMessage(error);
            })
        }
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() =>
          get5First()
            .then(setGoods)
            .catch(error => {
              setErrorMessage(error);
            })
        }
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() =>
          getRedGoods()
            .then(setGoods)
            .catch(error => {
              setErrorMessage(error);
            })
        }
      >
        Load red goods
      </button>

      {errorMessage ? <p>{errorMessage}</p> : <GoodsList goods={goods} />}
    </div>
  );
};
