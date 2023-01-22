import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [currentGoods, setCurrentGoods] = useState<Good[]>([]);

  const setRequestedGoods = (request: () => Promise<Good[]>) => {
    switch (request) {
      case getAll:
        getAll().then((result) => setCurrentGoods(result));
        break;
      case get5First:
        get5First().then((result => setCurrentGoods(result)));
        break;
      case getRedGoods:
        getRedGoods().then((result) => setCurrentGoods(result));
        break;
      default:
        throw new Error('Something went wrong');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setRequestedGoods(getAll);
        }}
      >
        getAll
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => {
          setRequestedGoods(get5First);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => {
          setRequestedGoods(getRedGoods);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={currentGoods} />
    </div>
  );
};
