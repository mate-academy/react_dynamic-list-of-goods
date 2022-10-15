import React, { useState } from 'react';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll()
            .then((data) => {
              setGoods(data);
            }).catch(() => {
              throw new Error('Error, sorry :(');
            });
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First()
            .then((data) => {
              setGoods(data);
            }).catch(() => {
              throw new Error('Error, sorry :(');
            });
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods()
            .then((data) => {
              setGoods(data);
            }).catch(() => {
              throw new Error('Error, sorry :(');
            });
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
