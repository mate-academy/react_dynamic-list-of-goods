import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() =>
          getAll()
            .then(setGoods)
            .catch(error => setErrorMessage(error.message))
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
            .catch(error => setErrorMessage(error.message))
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
            .catch(error => setErrorMessage(error.message))
        }
      >
        Load red goods
      </button>
      {errorMessage === '' ? (
        <GoodsList goods={goods} />
      ) : (
        <div>{errorMessage}</div>
      )}
    </div>
  );
};
