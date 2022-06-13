import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function finderAll() {
    const result = await getAll();

    setGoods(result);
  }

  async function finderFive() {
    const result = await get5First();

    setGoods(
      result.sort(
        (a : Good, b: Good) => a.name.localeCompare(b.name),
      ).splice(0, 5),
    );
  }

  async function finderRed() {
    const result = await getRedGoods();

    setGoods(result.filter((el : Good) => el.color === 'red'));
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          finderAll();
        }}
      >
        List Of Goods
      </button>
      <button
        type="button"
        onClick={() => {
          finderFive();
        }}
      >
        First 5 Goods
      </button>
      <button
        type="button"
        onClick={() => {
          finderRed();
        }}
      >
        Red Goods
      </button>
      <GoodsList goodsArray={goods} />
    </>
  );
};

export default App;
