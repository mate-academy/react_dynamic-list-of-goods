import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLoadAll = (getGoods: () => Promise<Good[]>) => {
    getGoods()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const showErrorMessage = errorMessage && (
    <p style={{ color: 'red' }}>{errorMessage}</p>
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadAll(getAll)}
      >
        Load all goods
      </button>
      {errorMessage && (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      )}

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadAll(get5First)}
      >
        Load 5 first goods
      </button>
      {showErrorMessage}

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadAll(getRedGoods)}
      >
        Load red goods
      </button>
      {showErrorMessage}

      <GoodsList goods={goods} />
    </div>
  );
};
