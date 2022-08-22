import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const setGoodsFromServer = (promise:() => Promise<Good[]>) => {
    promise().then((goodsFromServer) => setGoods(goodsFromServer));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={() => setGoodsFromServer(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setGoodsFromServer(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setGoodsFromServer(getRed)}
      >
        Load red goods
      </button>

      {goods
        && <GoodsList goods={goods} />}
    </div>
  );
};
