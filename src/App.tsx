import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll()
      .then(allGoods => {
        setGoods(allGoods);
      })
      .catch(() => {
        setGoods([]);
      });
  };

  const handleLoadFive = () => {
    get5First()
      .then(firstFive => {
        setGoods(firstFive);
      })
      .catch(() => {
        setGoods([]);
      });
  };

  const handleLoadRed = () => {
    getRedGoods()
      .then(redGoods => {
        setGoods(redGoods);
      })
      .catch(() => {
        setGoods([]);
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

      <GoodsList goods={goods} />
    </div>
  );
};
