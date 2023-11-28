import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  const getAllButtonHandler = async () => {
    const goodsList = await goodsAPI.getAll();

    setGoods(goodsList);
  };

  const getRedGoodsButtonHandler = async () => {
    const goodsList = await goodsAPI.getRedGoods();

    setGoods(goodsList);
  };

  const getFirstFiveGoodsButtonHandler = async () => {
    const goodsList = await goodsAPI.get5First();

    setGoods(goodsList);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllButtonHandler}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFirstFiveGoodsButtonHandler}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedGoodsButtonHandler}
      >
        Load red goods
      </button>

      {goods.length !== 0 && (<GoodsList goods={goods} />)}
    </div>
  );
};
