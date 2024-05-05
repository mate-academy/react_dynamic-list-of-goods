import React from 'react';
import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  console.log(visibleGoods);

  const handleShowAllGoods = () => {
    getAll().then(goods => setVisibleGoods(goods));
  };

  const handleShowFive = () => {
    get5First()
      .then(goods =>
        goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
      )
      .then(goods => setVisibleGoods(goods));
  };

  const handleShowRed = () => {
    getRedGoods().then(goods =>
      setVisibleGoods(goods.filter(good => good.color === 'red')),
    );
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleShowAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleShowFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleShowRed}>
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
