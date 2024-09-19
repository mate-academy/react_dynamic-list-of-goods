import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { useState } from 'react';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAllGoods = () => {
    getAll().then(loadedGoods => setGoods(loadedGoods));
  };

  const handleLoadFiveFirstGoods = () => {
    get5First().then(loadedGoods => setGoods(loadedGoods));
  };

  const handleLoadRedGoods = () => {
    getRedGoods().then(loadedGoods => setGoods(loadedGoods));
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
        onClick={handleLoadFiveFirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
