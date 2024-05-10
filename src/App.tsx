import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = React.useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll().then(goods => setGoodsFromServer(goods));
  };

  const handleLoad5First = () => {
    get5First().then(goods => setGoodsFromServer(goods));
  };

  const handleLoadRed = () => {
    getRedGoods().then(goods => setGoodsFromServer(goods));
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
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
