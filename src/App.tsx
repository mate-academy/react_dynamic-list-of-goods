import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { useLoadGoods } from './hooks/useLoadGoods';

export const App: React.FC = () => {
  const [goods, isLoading, error, handleLoadGoods] = useLoadGoods();

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {isLoading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!isLoading && !error && <GoodsList goods={goods} />}
    </div>
  );
};
