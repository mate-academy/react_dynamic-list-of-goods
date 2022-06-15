import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function Allgoods() {
    setGoods(await getAll());
  }

  async function Five() {
    setGoods(await get5First());
  }

  async function Red() {
    setGoods(await getRedGoods('red'));
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
