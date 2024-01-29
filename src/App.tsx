import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleOnClickAll = () => {
    getAll()
      .then((good) => setGoods(good));
  };

  const handleOnClickFive = () => {
    get5First()
      .then((good) => setGoods(good));
  };

  const handleOnClickRed = () => {
    getRedGoods()
      .then((good) => setGoods(good));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleOnClickAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleOnClickFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleOnClickRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
