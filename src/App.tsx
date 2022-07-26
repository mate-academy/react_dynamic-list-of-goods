import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const showAll = () => {
    getAll()
      .then(allGoods => setGoods(allGoods));
  };

  const show5First = () => {
    get5First()
      .then(allGoods => setGoods(allGoods));
  };

  const showReds = () => {
    getRed()
      .then(allGoods => setGoods(allGoods));
  };

  return (
    (
      <div className="App">
        <h1 className="title large">Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={showAll}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={show5First}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={showReds}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    )
  );
};
