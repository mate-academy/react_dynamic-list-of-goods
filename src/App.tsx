import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = async () => {
    const loadedGoods = await goodsAPI.getAll();

    setGoods(loadedGoods);
  };

  const load5First = async () => {
    const loadedGoods = await goodsAPI.get5First();

    setGoods(loadedGoods);
  };

  const loadRed = async () => {
    // const loadedGoods = await goodsAPI.getRedGoods();
    setGoods(await goodsAPI.getRedGoods());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
