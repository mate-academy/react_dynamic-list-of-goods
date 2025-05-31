import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll().then(goods => setGoodsFromServer(goods));
  };

  const handle5First = () => {
    get5First().then(goods => setGoodsFromServer(goods));
  };

  const handleRedGoods = () => {
    getRedGoods().then(goods => setGoodsFromServer(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handleAllGoods} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={handle5First} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={handleRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
