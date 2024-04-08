import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  // const [upDate, setUpDate] = useState(new Date());

  // console.log();

  const reload = () => {
    setGoods([]);
  };

  const handleAll = () => {
    reload();
    goodsAPI.getAll().then(setGoods);
  };

  const handleFirstFive = () => {
    reload();
    goodsAPI.get5First().then(setGoods);
  };

  const handleRed = () => {
    reload();
    goodsAPI.getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
