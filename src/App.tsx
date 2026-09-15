import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  function handleClick(fetchFunction: () => Promise<Good[]>) {
    setErrorMessage('');

    return fetchFunction()
      .then(goodsFromServer => setGoods(goodsFromServer))
      .catch(() => {
        setErrorMessage('Unable to load goods. Please try again later.');
      });
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      {errorMessage && <p>{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
