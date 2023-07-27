import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = useCallback(() => {
    getAll().then(setGoods);
  }, []);

  const get5FirstGoods = useCallback(() => {
    get5First().then(setGoods);
  }, []);

  const getRed = useCallback(() => {
    getRedGoods().then(setGoods);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAllGoods()}
      >
        Load All goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5FirstGoods()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRed()}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
