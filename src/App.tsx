import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        className="button is-dark"
        type="button"
        data-cy="all-button"
        onClick={() => {
          goodsAPI.getAll()
            .then((newGoods) => {
              setGoods(newGoods);
            });
        }}
      >
        Load all goods
      </button>

      <button
        className="button is-dark"
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          goodsAPI.get5First()
            .then((newGoods) => {
              setGoods(newGoods);
            });
        }}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-dark"
        type="button"
        data-cy="red-button"
        onClick={() => {
          goodsAPI.getRedGoods()
            .then((newGoods) => {
              setGoods(newGoods);
            });
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
