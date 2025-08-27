import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  function handleRequest(request: () => Promise<Good[]>) {
    setErrorMessage('');
    request()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleRequest(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleRequest(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleRequest(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};
