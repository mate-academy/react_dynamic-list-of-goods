import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import 'bulma/css/bulma.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handelClick = async (loadedGoods: Promise<Good[]>) => {
    setGoods(await loadedGoods);
  };

  return (
    <div className="App content box">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-success is-light"
        onClick={() => handelClick(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-warning is-light"
        onClick={() => handelClick(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger is-light"
        onClick={() => handelClick(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
