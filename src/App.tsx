import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import type { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  const loadGoods = (getGoods: () => Promise<Good[]>) => {
    setErrorMessage('');

    getGoods()
      .then(setGoods)
      .catch(() => {
        setErrorMessage('Unable to load goods');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {errorMessage && <p>{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
