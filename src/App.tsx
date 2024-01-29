import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = (query: string) => {
    switch (query) {
      case 'all':
        goodsAPI.getAll()
          .then(setGoods);
        break;

      case 'first5':
        goodsAPI.get5First()
          .then(setGoods);
        break;

      case 'red':
        goodsAPI.getRedGoods()
          .then(setGoods);
        break;

      default:
        goodsAPI.getAll()
          .then(setGoods);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleClick('all');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleClick('first5');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleClick('red');
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
