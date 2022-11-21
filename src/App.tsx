import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

type GetGoodsCallback = () => Promise<Good[]>;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const setGoodsFromServer = (getGoods: GetGoodsCallback) => {
    getGoods()
      .then(newGoods => setGoods(newGoods))
      .catch(error => {
        throw new Error(error);
      });
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
        onClick={() => setGoodsFromServer(getRedGoods)}
      >
        Load red goods
      </button>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
