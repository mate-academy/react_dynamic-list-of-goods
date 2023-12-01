import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoodsClick = async () => {
    const goodsArr = await goodsAPI.getAll();

    setGoods(goodsArr);
  };

  const handleFiveGoodsClick = async () => {
    const goodsArr = await goodsAPI.get5First();

    setGoods(goodsArr);
  };

  const handleRedGoodsClick = async () => {
    const goodsArr = await goodsAPI.getRedGoods();

    setGoods(goodsArr);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveGoodsClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoodsClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
