import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll().then(receivedGoods => {
      setGoodsList(receivedGoods);
    });
  };

  const handleLoadFive = () => {
    get5First().then(receivedGoods => {
      setGoodsList(receivedGoods);
    });
  };

  const handleLoadRed = () => {
    getRedGoods().then(receivedGoods => {
      setGoodsList(receivedGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
