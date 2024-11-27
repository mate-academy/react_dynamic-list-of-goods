import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    goodsAPI.getAll().then(allGoods => {
      setGoods(allGoods);
    });
  };

  const loadFirstFiveGoods = () => {
    goodsAPI.get5First().then(firstFiveGoods => {
      setGoods(firstFiveGoods);
    });
  };

  const loadRedGoods = () => {
    goodsAPI.getRedGoods().then(redGoods => {
      setGoods(redGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={[]} />
    </div>
  );
};
