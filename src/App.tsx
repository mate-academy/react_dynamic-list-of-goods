import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = useCallback((buttonName: string) => {
    switch (buttonName) {
      case 'all-button':
        getAll()
          .then(apiGoods => setGoods(apiGoods));
        break;

      case 'first-five-button':
        get5First()
          .then(apiGoods => setGoods(apiGoods));
        break;

      case 'red-button':
        getRedGoods()
          .then(apiGoods => setGoods(apiGoods));
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleClick('all-button');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleClick('first-five-button');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleClick('red-button');
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
