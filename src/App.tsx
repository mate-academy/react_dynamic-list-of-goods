import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState([]);
  const [hasError, setHasError] = useState(false);

  const setVisibleGoods = (callback: () => Promise<Good[]>) => {
    callback()
      .then(visibleGoods => {
        setHasError(false);
        setGoods(visibleGoods);
      })
      .catch(() => setHasError(true));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={() => setVisibleGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setVisibleGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setVisibleGoods(getRedGoods)}
      >
        Load red goods
      </button>
      {hasError && (
        <p>ERROR!!!!!!!!!!</p>
      )}
      <GoodsList goods={goods} />
    </div>
  );
};
