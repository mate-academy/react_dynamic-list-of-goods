import React, { useState } from 'react';
import './App.scss';
import { getAll } from './api/goods';
import { GoodList } from './components/GoodList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function Allgoods() {
    setGoods(await getAll());
  }

  async function Five() {
    const result = await getAll();

    setGoods(result.splice(0, 5));
  }

  async function Red() {
    const result = await getAll();

    setGoods(result.filter((item : Good) => item.color === 'red'));
  }

  return (
    <>
      <GoodList goodsArr={goods} />
      <button
        type="button"
        onClick={() => {
          Allgoods();
        }}
      >
        All goods
      </button>
      <button
        type="button"
        onClick={() => {
          Five();
        }}
      >
        5 Goods
      </button>
      <button
        type="button"
        onClick={() => {
          Red();
        }}
      >
        Red Goods
      </button>
    </>
  );
};
