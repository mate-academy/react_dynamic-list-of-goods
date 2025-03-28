/* eslint-disable no-console */
import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadGoodsAll = async () => {
    try {
      const goodsList = await getAll().then();

      setGoods(goodsList);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  const handleLoadGoods5 = async () => {
    try {
      const goodsList = await get5First().then();

      setGoods(goodsList);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  const handleLoadGoodsRed = async () => {
    try {
      const goodsList = await getRedGoods().then();

      setGoods(goodsList);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadGoodsAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadGoods5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadGoodsRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
