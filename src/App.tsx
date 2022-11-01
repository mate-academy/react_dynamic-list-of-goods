import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showGoods = async (loadGoods: () => Promise<Good[]>) => {
    const loadedGoods = await loadGoods();

    setGoods(loadedGoods);
  };

  return (
    <div className="app">
      <h1>Dynamic list of Goods</h1>

      <div className="app_buttons">
        <button
          className="app__button app__button--all"
          type="button"
          data-cy="all-button"
          onClick={() => showGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          className="app__button app__button--five"
          type="button"
          data-cy="first-five-button"
          onClick={() => showGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="app__button app__button--red"
          type="button"
          data-cy="red-button"
          onClick={() => showGoods(getRedGoods)}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
