import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    goodsAPI.getAll().then(setGoods);
  };

  const getFirstFiveGoods = () => {
    goodsAPI.get5First().then(setGoods);
  };

  const getAllRedGoods = () => {
    goodsAPI.getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={getAllGoods} data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={getFirstFiveGoods}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={getAllRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
