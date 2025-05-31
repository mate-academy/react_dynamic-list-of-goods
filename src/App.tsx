import React from 'react';
import './App.scss';
import { useState } from 'react';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
//import { getAll, get5First, getRed } from './api/goods';

import * as goodsAPI from './api/goods';

type Props = {
  goods: Good[];
};

export const App: React.FC<Props> = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          goodsAPI.getAll().then(setGoods);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          goodsAPI.get5First().then(setGoods);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          goodsAPI.getRedGoods().then(setGoods);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
