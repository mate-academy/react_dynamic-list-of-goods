import React, { useState } from 'react';

import './App.scss';

import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showGoods = async (callback: () => Promise<Good[]>) => {
    const filteredGood = await callback();

    setGoods(filteredGood);
  };

  const ShowAll = () => showGoods(goodsAPI.getAll);
  const ShowFive = () => showGoods(goodsAPI.get5First);
  const ShowReds = () => showGoods(goodsAPI.getRedGoods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={ShowAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={ShowFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={ShowReds}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
