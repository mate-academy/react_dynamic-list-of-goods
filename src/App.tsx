import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll().then(goodsFromServer => setGoods(goodsFromServer));
  };

  const get5Goods = () => {
    get5First().then(goodsFromServer => setGoods(goodsFromServer));
  };

  const getRedGoods = () => {
    getRed().then(goodsFromServer => setGoods(goodsFromServer));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={get5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
