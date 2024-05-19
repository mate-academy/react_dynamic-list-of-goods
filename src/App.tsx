import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type Good = {
  id: number;
  name: string;
  color: string;
};

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);

  const handleAll = async () => {
    const goods = await getAll();

    setGoodsFromServer(goods);
  };

  const handleFive = async () => {
    const goods = await get5First();

    setGoodsFromServer(goods);
  };

  const handleRed = async () => {
    const goods = await getRedGoods();

    setGoodsFromServer(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRed}>
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
