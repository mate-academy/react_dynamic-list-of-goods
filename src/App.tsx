import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAllGoods = () => {
    getAll().then(goodsFromServer => {
      setGoods(goodsFromServer);
    });
  };

  const handleLoad5First = () => {
    get5First().then(goodsFromServer => {
      setGoods(goodsFromServer);
    });
  };

  const handleLoadRed = () => {
    getRedGoods().then(goodsFromServer => {
      setGoods(goodsFromServer);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      {/* eslint-disable */}
      <button type="button" data-cy="first-five-button" onClick={handleLoad5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
}
