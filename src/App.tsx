import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsToShow, setGoods]: any[] = useState([]);
  const showAll = () => {
    getAll()
      .then(goods => setGoods(goods));
  };

  const showFiveFarst = () => {
    get5First()
      .then(goods => setGoods(goods));
  };

  const showRedGoods = () => {
    getRedGoods()
      .then(goods => setGoods(goods));
  };

  return (
    (
      <div className="App">
        <h1 className="title large">Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={showAll}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={showFiveFarst}
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

        <GoodsList goods={goodsToShow} />
      </div>
    )
  );
};
