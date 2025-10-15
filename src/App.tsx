import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleClick(promise: Promise<Good[]>) {
    try {
      setLoading(true);
      const goodsPromise = await promise;

      setGoods(goodsPromise);
    } catch (error) {
      setErrorMessage(String(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {loading && 'Loading data'}
      {errorMessage && String(errorMessage)}

      <button
        onClick={() => handleClick(getAll())}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => handleClick(get5First())}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => handleClick(getRedGoods())}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
