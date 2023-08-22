import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getGoods = (callback: () => Promise<Good[]>) => {
    setIsLoading(true);
    callback()
      .then(setGoods)
      .catch((error: Error) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getGoods(getAll);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => getGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getGoods(getRed)}
      >
        Load red goods
      </button>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <GoodsList goods={goods} />
      )}

      {errorMessage && (
        <p>{`There is an Error: ${errorMessage}`}</p>
      )}
    </div>
  );
};
