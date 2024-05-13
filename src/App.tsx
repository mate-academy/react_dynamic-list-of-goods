import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handlerGetAll = () => {
    getAll().then(goodsFromServer => setGoods(goodsFromServer));
  };

  const handlerGet5First = () => {
    get5First().then(goodsFromServer => setGoods(goodsFromServer));
  };

  const handlerGetRed = () => {
    getRedGoods().then(goodsFromServer => setGoods(goodsFromServer));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handlerGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlerGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handlerGetRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
