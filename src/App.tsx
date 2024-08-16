import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAll = () => {
    goodsAPI.getAll().then(goodsList => {
      setGoods(goodsList);
    });
  };

  const handleFiveGoods = () => {
    goodsAPI.get5First().then(goodsList => {
      setGoods(goodsList);
    });
  };

  const handleRedGoods = () => {
    goodsAPI.getRedGoods().then(goodsList => {
      setGoods(goodsList);
    });
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
        onClick={handleFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>
      {goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
