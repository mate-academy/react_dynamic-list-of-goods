/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAll = () => {
    goodsAPI.getAll()
      .then((goodsFromServer) => setGoods(goodsFromServer))
      .catch((error) => console.error(error));
  };

  const get5First = () => {
    goodsAPI.get5First()
      .then((goodsFromServer) => setGoods(goodsFromServer))
      .catch((error) => console.error(error));
  };

  const getRedGoods = () => {
    goodsAPI.getRedGoods()
      .then((goodsFromServer) => setGoods(goodsFromServer))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
