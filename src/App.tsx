import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsFromServer, setgoodsFromServer] = useState<Good[]>([]);
  const loadGoods = async () => {
    const goods = await getAll();

    setgoodsFromServer(goods);
  };

  const loadFiveGoods = async () => {
    const goods = await get5First();

    setgoodsFromServer(goods);
  };

  const loadOnlyRedGoods = async () => {
    const goods = await getRedGoods();

    setgoodsFromServer(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFiveGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadOnlyRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
