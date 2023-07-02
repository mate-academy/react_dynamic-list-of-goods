import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma/css/bulma.min.css';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const goodsapi = await getAll();

    setGoods(goodsapi);
  };

  const loadFiveFirst = async () => {
    const goodsapi = await get5First();

    setGoods(goodsapi);
  };

  const loadRed = async () => {
    const goodsapi = await getRed();

    setGoods(goodsapi);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
        className="button is-info"
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFiveFirst}
        className="button is-info"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRed}
        className="button is-info"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
