import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAllClick = () => {
    getAll().then((allGoods) => {
      setGoods(allGoods);
    });
  };

  const handleLoad5Goods = () => {
    get5First().then((someGoods) => {
      setGoods(someGoods);
    });
  };

  const handleLoadRedGoods = () => {
    getRedGoods().then((redGoods) => {
      setGoods(redGoods);
    });
  };

  return (
    <div className="App box">
      <h1 className="title">
        Dynamic list of Goods
      </h1>

      <div className="block">
        <button
          type="button"
          className="button"
          data-cy="all-button"
          onClick={handleLoadAllClick}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button"
          data-cy="first-five-button"
          onClick={handleLoad5Goods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button"
          data-cy="red-button"
          onClick={handleLoadRedGoods}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
