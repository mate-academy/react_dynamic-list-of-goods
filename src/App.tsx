import React, { useState } from 'react';
import './App.scss';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = (getGoods: () => Promise<Good[]>) => {
    setErrorMessage('');

    getGoods()
      .then(setGoods)
      .catch(() => setErrorMessage('Unable to load goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};
