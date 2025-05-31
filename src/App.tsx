import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [showGoods, setShowGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(goods => setShowGoods(goods));
  };

  const loadFirstFiveGoods = () => {
    get5First().then(goods => setShowGoods(goods));
  };

  const loadRedGoods = () => {
    getRedGoods().then(goods => setShowGoods(goods));
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

      <GoodsList goods={showGoods} />
    </div>
  );
};
