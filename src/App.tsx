import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from "./api/goods";

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handlerGetGoods = (promise: Promise<Good[]>) => {
    promise
      .then((json) => {
        setGoods(json);
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handlerGetGoods(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handlerGetGoods(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handlerGetGoods(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
