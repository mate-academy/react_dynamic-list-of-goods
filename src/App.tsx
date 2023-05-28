import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const loadGoods = (fetchFunction: () => Promise<Good[]>) => async () => {
    try {
      const loadedGoods = await fetchFunction();

      setGoods(loadedGoods);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadGoods(getAllGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadGoods(get5FirstGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} errorMessage={errorMessage} />
    </div>
  );
};
