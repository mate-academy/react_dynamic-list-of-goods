import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  function handlerAllGoods() {
    getAll().then(goodsFromServer => setGoods(goodsFromServer));
  }

  function handlerFiveGoods() {
    get5First().then(goodsFromServer => setGoods(goodsFromServer));
  }

  function handlerRedGoods() {
    getRedGoods().then(goodsFromServer => setGoods(goodsFromServer));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handlerAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlerFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handlerRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
