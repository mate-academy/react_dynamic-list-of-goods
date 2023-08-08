import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [shownGoods, setShownGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const goods = await getAll();

    setShownGoods(goods);
  };

  const get5FirstGoods = async () => {
    const goods = await get5First();

    setShownGoods(goods);
  };

  const getRedGoods = async () => {
    const goods = await getRed();

    setShownGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={shownGoods} />
    </div>
  );
};
