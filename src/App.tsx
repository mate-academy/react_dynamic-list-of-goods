/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsFromServer, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    return getAll().then(goods => setGoods(goods));
  };

  const get5FirstGoods = () => (
    get5First().then(goods => setGoods(goods))
  );

  const getAllRedGoods = () => (
    getRedGoods().then(goods => setGoods(goods))
  );

  return (

    <div className="App m-3">
      <h1 className="title is-2">
        Dynamic list of Goods
      </h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-success mr-3"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-info mr-3"
        onClick={get5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger"
        onClick={getAllRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
