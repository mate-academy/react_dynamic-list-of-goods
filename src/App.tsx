// src/App.tsx
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = async () => {
    const data = await goodsAPI.getAll();

    setGoods(data);
  };

  const loadFirstFive = async () => {
    const data = await goodsAPI.get5First();

    setGoods(data);
  };

  const loadRed = async () => {
    const data = await goodsAPI.getRedGoods();

    setGoods(data);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons-container">
        <button type="button" data-cy="all-button" onClick={loadAll}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={loadFirstFive}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={loadRed}>
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
