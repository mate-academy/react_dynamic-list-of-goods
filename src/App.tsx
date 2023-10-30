import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';
export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handlerLoadAllGoods = () => {
    return getAll().then((data) => setGoods(data));
  };

  const handlerLoad5First = () => {
    return get5First().then((data) => setGoods(data));
  };

  const handlerLoadRedGoods = () => {
    return getRedGoods().then((data) => setGoods(data));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handlerLoadAllGoods} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={handlerLoad5First}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={handlerLoadRedGoods}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
