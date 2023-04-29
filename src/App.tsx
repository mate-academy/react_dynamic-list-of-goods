import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isError, setIsError] = useState(false);

  const loadAvailableGoods = async (goodsFromServer: Promise<Good[]>) => {
    setIsError(false);

    try {
      const availableGoods = await goodsFromServer;

      setGoods(availableGoods);
    } catch {
      setIsError(true);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadAvailableGoods(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadAvailableGoods(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadAvailableGoods(getRedGoods())}
      >
        Load red goods
      </button>

      {goods.length > 0 ? (
        <GoodsList goods={goods} />
      ) : (
        <h1>None of the available Goods were loaded yet</h1>
      )}
      {isError && <h1>Server is not responding</h1>}
    </div>
  );
};
