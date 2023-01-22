import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import 'bulma/css/bulma.min.css';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetGoods = (loadedGoods: Promise<Good[]>) => {
    loadedGoods.then(setGoods);
  };

  return (
    <div className="App">
      <h1
        className="title is-1"
      >
        Dynamic list of Goods
      </h1>

      <button
        className="button is-info is-light"
        type="button"
        data-cy="all-button"
        onClick={() => handleGetGoods(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGetGoods(get5First())}
        className="button is-success is-light"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGetGoods(getRedGoods())}
        className="button is-danger is-light"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
