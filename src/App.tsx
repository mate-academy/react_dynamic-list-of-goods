import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll().then(allGoods => setGoods(allGoods));
  };

  const get5Goods = () => {
    get5First().then(allGoods => setGoods(allGoods));
  };

  const getAllRedGoods = () => {
    getRedGoods().then(allGoods => setGoods(allGoods));
  };

  return (
    <div className="container">
      <div className="app">
        <h1 className="app__title">Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            data-cy="all-button"
            onClick={getAllGoods}
            className="button"
          >
            Load all goods
          </button>

          <button
            type="button"
            data-cy="first-five-button"
            onClick={get5Goods}
            className="button"
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            data-cy="red-button"
            onClick={getAllRedGoods}
            className="button"
          >
            Load red goods
          </button>
        </div>

        <GoodsList goods={goods} />
      </div>
    </div>
  );
};
