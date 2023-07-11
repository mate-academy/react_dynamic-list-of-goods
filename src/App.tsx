import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = async (goodsLoader: () => Promise<Good[]>) => {
    try {
      const loadedGoods = await goodsLoader();

      setGoods(loadedGoods);
    } catch {
      setErrorMessage('error');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

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

      {!errorMessage
        ? <GoodsList goods={goods} />
        : <p>{errorMessage}</p>}
    </div>
  );
};
