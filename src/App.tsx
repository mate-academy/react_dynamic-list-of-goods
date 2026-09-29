import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoad = (loader: () => Promise<Good[]>) => {
    setErrorMessage('');

    loader()
      .then(setVisibleGoods)
      .catch(() => setErrorMessage('Something went wrong. Please try again.'));
  };

  const handleLoadAll = () => handleLoad(getAll);
  const handleLoad5First = () => handleLoad(get5First);
  const handleLoadRed = () => handleLoad(getRedGoods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
