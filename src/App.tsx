import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const allGoodsHandler = async () => {
    try {
      const goods = await getAll();

      setGoodsList(goods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Goods not found!', error);
    }
  };

  const firstFiveGoodsHandler = async () => {
    try {
      const goods = await get5First();

      setGoodsList(goods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Goods not found!', error);
    }
  };

  const onlyRedGoodsHandler = async () => {
    try {
      const goods = await getRedGoods();

      setGoodsList(goods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Goods not found!', error);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={allGoodsHandler}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={firstFiveGoodsHandler}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={onlyRedGoodsHandler}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
