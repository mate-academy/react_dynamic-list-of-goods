import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);

  const createGoodsList = (getGoodsCallback: () => Promise<Good[]>) => {
    getGoodsCallback()
      .then(goods => setGoodsFromServer(goods))
      .catch(error => `Oops, error - ${error}`);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => createGoodsList(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => createGoodsList(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => createGoodsList(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
