import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadAll = (getGoods: () => Promise<Good[]>) => {
    getGoods()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

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
      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadAll(get5First)}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadAll(getRedGoods)}
      >
        Load red goods
      </button>

      {errorMessage && (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
