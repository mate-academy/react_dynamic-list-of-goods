import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadAllGoods = () => {
    getAll().then(goods => {
      setAllGoods(goods);
      setIsLoaded(true);
    });
  };

  const loadFiveFirstGoods = () => {
    get5First().then(goods => {
      setAllGoods(goods);
      setIsLoaded(true);
    });
  };

  const loadRedGoods = () => {
    getRedGoods().then(goods => {
      setAllGoods(goods);
      setIsLoaded(true);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => loadAllGoods()}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadFiveFirstGoods()}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => loadRedGoods()}>
        Load red goods
      </button>

      {isLoaded && <GoodsList goods={allGoods} />}
    </div>
  );
};
