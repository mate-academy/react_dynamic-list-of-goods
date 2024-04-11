/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsData, setGoodsData] = useState<Good[]>([]);

  const handleLoadAll = async () => {
    const allGoods = await getAll();

    setGoodsData(allGoods);
  };

  const handleLoadFirstFive = async () => {
    const fiveFirstGoods = await get5First();

    setGoodsData(fiveFirstGoods);
  };

  const handleLoadRed = async () => {
    const redGoods = await getRedGoods();

    setGoodsData(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goodsData} />
    </div>
  );
};
