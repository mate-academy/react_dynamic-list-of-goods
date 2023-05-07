import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App = React.memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleGetGoods = (getGoods: () => Promise<Good[]>) => (
    getGoods()
      .then(setGoods)
      .catch(() => setErrorMessage('An error occurred while loading goods!'))
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGetGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGetGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGetGoods(getRedGoods)}
      >
        Load red goods
      </button>
      {errorMessage && <p>{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
});
