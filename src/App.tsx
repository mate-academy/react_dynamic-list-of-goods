import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAll = () => {
    goodsAPI.getAll().then(setGoods);
  };

  const handle5First = () => {
    goodsAPI.get5First().then(setGoods);
  };

  const handleRedGoods = () => {
    goodsAPI.getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handle5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      {goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
