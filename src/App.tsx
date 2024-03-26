import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [loadedGoods, setLoadedGoods] = useState<Good[]>([]);

  const handleLoadAllGoods = () => {
    getAll().then(goods => setLoadedGoods(goods));
  };

  const handleLoadFirstFiveGoods = () => {
    get5First().then(goods => setLoadedGoods(goods));
  };

  const handleLoadRedGoods = () => {
    getRedGoods().then(goods => setLoadedGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={loadedGoods} />
    </div>
  );
};
