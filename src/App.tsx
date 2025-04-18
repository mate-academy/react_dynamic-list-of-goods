import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onClick = () => {
    getAll().then(setGoods);
  };

  const getFirstFiveClick = () => {
    get5First().then(setGoods);
  };

  const getRedClick = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={onClick}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFirstFiveClick}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedClick}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
