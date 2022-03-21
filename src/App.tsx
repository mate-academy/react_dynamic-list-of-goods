import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={async () => {
          const allGoods = await getAll();

          setGoods(allGoods);
        }}
        type="button"
      >
        Load All goods
      </button>

      <button
        onClick={async () => {
          const first5Goods = await get5First();

          setGoods(first5Goods);
        }}
        type="button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={async () => {
          const redGoods = await getRedGoods();

          setGoods(redGoods);
        }}
        type="button"
      >
        Load red goods
      </button>

      {(goods.length > 0) && (
        <GoodsList goods={goods} />
      )}
    </>
  );
};
