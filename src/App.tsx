import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const loadGoods = (fetchMethod: () => Promise<Good[]>) => {
    setErrorMessage('');

    fetchMethod()
      .then(setGoods)
      .catch(() => setErrorMessage('Failed to load goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
