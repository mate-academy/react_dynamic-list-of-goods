import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = useCallback((loader: () => Promise<Good[]>) => {
    setErrorMessage('');

    loader()
      .then(setGoods)
      .catch(() => setErrorMessage('Unable to load goods. Please try again'));
  }, []);

  const handleLoadAll = useCallback(() => loadGoods(getAll), [loadGoods]);

  const handleLoad5First = useCallback(() => loadGoods(get5First), [loadGoods]);

  const handleLoadRed = useCallback(() => loadGoods(getRedGoods), [loadGoods]);

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

      {errorMessage && <p className="error">{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};