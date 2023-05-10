import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import {
  get5First,
  getAll,
  getRedGoods,
} from './api/goods';

export const App: React.FC = () => {
  const [displayedGoods, setDisplayedGoods] = useState<Good[]>([]);

  const handleGetGoods = async (goods: Promise<Good[]>) => {
    try {
      setDisplayedGoods(await goods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleGetGoods(getAll());
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleGetGoods(get5First());
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleGetGoods(getRedGoods());
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={displayedGoods} />
    </div>
  );
};
