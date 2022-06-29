import React, { useState } from 'react';
import './App.scss';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const loadedGoods = await getAll();

    setGoods(loadedGoods);
  };

  const loadFirst5Goods = async () => {
    const loadedGoods = await get5First();

    setGoods(loadedGoods);
  };

  const loadRedGoods = async () => {
    const loadedGoods = await getRedGoods();

    setGoods(loadedGoods);
  };

  return (
    <div className="has-text-centered">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        className="button is-responsive"
        onClick={() => loadAllGoods()}
      >
        All Goods
      </button>

      <button
        type="button"
        className="button is-responsive"
        onClick={() => loadFirst5Goods()}
      >
        First 5 Goods
      </button>

      <button
        type="button"
        className="button is-danger is-outlined"
        onClick={() => loadRedGoods()}
      >
        Red Coloured Goods
      </button>

      <div>
        <GoodsList goods={goods} />
      </div>
    </div>
  );
};
