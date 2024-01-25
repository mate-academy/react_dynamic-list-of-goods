import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoodsClick = () => {
    getAll()
      .then(setGoods);
  };

  const handleFirstFiveGoodsClick = () => {
    get5First()
      .then(setGoods);
  };

  const handleOnlyRedClick = () => {
    getRedGoods()
      .then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveGoodsClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleOnlyRedClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
