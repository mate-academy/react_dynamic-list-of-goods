import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [currentGoods, setCurrentGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (fetchFromServer: () => Promise<Good[]>) => {
    fetchFromServer()
      .then(goods => {
        setCurrentGoods(goods);
        setErrorMessage('');
      })
      .catch(() => {
        setErrorMessage('Something went wrong... Try again later!');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(getRedGoods)}
      >
        Load red goods
      </button>

      {errorMessage
        ? <p>{errorMessage}</p>
        : <GoodsList goods={currentGoods} />}
    </div>
  );
};
