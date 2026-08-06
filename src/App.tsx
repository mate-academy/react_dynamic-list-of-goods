import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC<Good> = () => {
  const [goods, setGoods] = useState([]);
  const [, setAllAvailableGoods] = useState([]);

  const handleShowGoods = () => {
    goodsAPI.getAll()
      .then(goods => {
        setGoods(goods)
        setAllAvailableGoods(goods)
      })
      .catch(error => console.error("Error loading goods:", error));
  };

  const handleShowFive = () => {
    goodsAPI.get5First()
      .then(goods => {
        setGoods(goods)
        setAllAvailableGoods(goods)
      })
      .catch(error => console.error("Error loading goods:", error));
  }

  const handleShowRed = () => {
    goodsAPI.getRedGoods()
      .then(goods => {
        setGoods(goods)
        setAllAvailableGoods(goods)
      })
      .catch(error => console.error("Error loading goods:", error));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleShowGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleShowFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleShowRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
