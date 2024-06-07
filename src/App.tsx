import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const LoadAllGoods = () => {
    goodsAPI.getAll().then(setGoods);
  };

  const Load5Goods = () => {
    goodsAPI.get5First().then(setGoods);
  };

  const LoadRedGoods = () => {
    goodsAPI.getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={LoadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={Load5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={LoadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
