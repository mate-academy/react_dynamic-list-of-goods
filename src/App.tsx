import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={async () => {
          const allGoods = await goodsAPI.getAll();

          setGoods(allGoods);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => {
          const firstFive = await goodsAPI.get5First();

          setGoods(firstFive);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => {
          const redGoods = await goodsAPI.getRedGoods();

          setGoods(redGoods);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
