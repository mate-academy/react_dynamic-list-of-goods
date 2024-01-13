import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAllOnClick = () => {
    getAll()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  const handleGet5FirstOnClick = () => {
    get5First()
      .then(goodsFromServer => {
        setGoods(goodsFromServer.slice(0, 5));
      });
  };

  const handleGetReadGoodsOnClick = () => {
    getRedGoods()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAllOnClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5FirstOnClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetReadGoodsOnClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
