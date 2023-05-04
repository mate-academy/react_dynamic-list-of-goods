import React, { useMemo, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadingAllGoods = () => {
    getAll()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleLoading5First = () => {
    get5First()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleLoadingRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const visibleGoods = useMemo(() => {
    return goods;
  }, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadingAllGoods}
      >
        Load all goods
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoading5First}
      >
        Load 5 first goods
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadingRed}
      >
        Load red goods
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
