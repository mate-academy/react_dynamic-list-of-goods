import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = async () => {
    setGoods(await getAll());
  };

  const load5Goods = async () => {
    setGoods(await get5First());
  };

  const redGoods = async () => {
    setGoods(await getRedGoods());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button button__list"
        onClick={loadGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button button__list"
        onClick={load5Goods}

      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button button__list"
        onClick={redGoods}

      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
