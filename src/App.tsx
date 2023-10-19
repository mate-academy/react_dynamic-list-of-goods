import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    goodsAPI.getAll()
      .then(fetchedGoods => {
        return setGoods(fetchedGoods);
      });
  };

  const loadFirst5Goods = () => {
    goodsAPI.get5First()
      .then(fetchedGoods => {
        return setGoods(fetchedGoods);
      });
  };

  const loadRedGoods = () => {
    goodsAPI.getRedGoods()
      .then(fetchedGoods => {
        return setGoods(fetchedGoods);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={loadAllGoods}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={loadFirst5Goods}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={loadRedGoods}
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
