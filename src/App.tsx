import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';
import 'bulma';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const getGoods = (loadGoods: () => Promise<Good[]>) => {
    loadGoods().then(setVisibleGoods);
  };

  return (
    <div className="App
      box
      has-text-centered
      m-6"
    >
      <h1 className="title">
        Dynamic list of Goods
      </h1>

      <div className="field is-grouped">
        <button
          className="button is-link is-rounded mr-3"
          type="button"
          data-cy="all-button"
          onClick={() => getGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          className="button is-primary is-rounded mr-3"
          type="button"
          data-cy="first-five-button"
          onClick={() => getGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-danger is-rounded"
          type="button"
          data-cy="red-button"
          onClick={() => getGoods(getRed)}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
