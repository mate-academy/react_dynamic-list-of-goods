import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>();

  const getAllGoods = async () => {
    const allGoods = await goodsAPI.getAll();

    if (allGoods) {
      setGoods(allGoods);
    }
  };

  const get5FirstGoods = async () => {
    const filteredGoods = await goodsAPI.get5First();

    if (filteredGoods) {
      setGoods(filteredGoods);
    }
  };

  const getRedGoods = async () => {
    const filteredGoods = await goodsAPI.getRed();

    if (filteredGoods) {
      setGoods(filteredGoods);
    }
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

      {goods && (<GoodsList goods={goods} />)}
    </div>
  );
};
