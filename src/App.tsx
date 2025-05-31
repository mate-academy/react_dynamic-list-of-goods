import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = React.useState<Good[]>([]);

  const get5Goods = () => {
    get5First().then(setGoodsFromServer);
  };

  const getAllGoods = () => {
    getAll().then(setGoodsFromServer);
  };

  const getRedGood = () => {
    getRedGoods().then(setGoodsFromServer);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => getAllGoods()}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5Goods()}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => getRedGood()}>
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
