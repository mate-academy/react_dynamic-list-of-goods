import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsAll, setGoodsAll] = useState<Good[]>([]);
  const [goods5First, setGoods5First] = useState<Good[]>([]);
  const [goodsRed, setGoodsRed] = useState<Good[]>([]);

  const handleClickAll = () => {
    getAll()
      .then(goods => {
        setGoodsAll(goods);
        setGoods5First([]);
        setGoodsRed([]);
      });
  };

  const handleClick5First = () => {
    get5First().then(goods => {
      setGoods5First(goods);
      setGoodsAll([]);
    });
  };

  const handleClickRedGoods = () => {
    getRedGoods().then(goods => {
      setGoodsRed(goods);
      setGoodsAll([]);
      setGoods5First([]);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClick5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleClickRedGoods}
      >
        Load red goods
      </button>

      <GoodsList
        goods={goodsAll}
        goods5First={goods5First}
        goodsRed={goodsRed}
      />
    </div>
  );
};
