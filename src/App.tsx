import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const haveError = (message: string) => {
    setError(message);
  };

  const showAll = () => {
    getAll()
      .then(setGoods)
      .catch(() => haveError('Error loading all goods'));
  };

  const showFiveFirst = () => {
    get5First()
      .then(setGoods)
      .catch(() => haveError('Error loading first five goods'));
  };

  const showRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => haveError('Error loading all red goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={showAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={showFiveFirst}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={showRed}
      >
        Load red goods
      </button>

      {!error
        ? (<GoodsList goods={goods} />
        ) : (<p>{error}</p>
        )}
    </div>
  );
};
