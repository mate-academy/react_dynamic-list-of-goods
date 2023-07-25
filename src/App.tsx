import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAll = async () => setGoods(await goodsAPI.getAll());

  const showFive = async () => setGoods(await goodsAPI.get5First());

  const showRed = async () => setGoods(await goodsAPI.getRedGoods());

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={showAll}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={showFive}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={showRed}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
