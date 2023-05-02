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

  const loadAll = async (goods: Promise<Good[]>) => {
    setDisplayedGoods(await goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          loadAll(getAll());
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          loadAll(get5First());
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          loadAll(getRedGoods());
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={displayedGoods} />
    </div>
  );
};
