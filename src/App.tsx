import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  // const [fiveGoods, setFiveGoods] = useState<Good[]>([]);

  // useEffect(() => {
  //   getAll()
  //     .then(setGoods);
  // }, []);

  const showAllGoods = () => {
    getAll()
      .then(arr => setGoods(arr));
  };

  // useEffect(() => {
  //   get5First()
  //     .then(setFiveGoods);
  // }, []);

  const showFiveGoods = () => {
    get5First()
      .then(arr => setGoods(arr));
  };

  const showRedGoods = () => {
    getRedGoods()
      .then(arr => setGoods(arr));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={showAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={showFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={showRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
