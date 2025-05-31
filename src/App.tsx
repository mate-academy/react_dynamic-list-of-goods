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

  const handleAllClick = () => {
    getAll()
      .then(setGoods)
      .catch(error => {
        return error;
      });
  };

  const handle5FirstClick = () => {
    get5First()
      .then(setGoods)
      .catch(error => {
        return error;
      });
  };

  const handleRedGoodsClick = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error => {
        return error;
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllClick}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstClick}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoodsClick}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
