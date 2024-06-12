import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(allGoods => {
      setGoods(allGoods);
    });
  };

  const loadFiveFirstGoods = () => {
    get5First().then(fiveGoods => {
      setGoods(fiveGoods);
    });
  };

  const loadRedGoods = () => {
    getRed().then(redGoods => {
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
        onClick={loadFiveFirstGoods}
      >
        Load 5 first goods
      </button>
      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
