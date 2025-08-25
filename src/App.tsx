import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function getGoods(select: string) {
    if (select === 'all') {
      getAll().then(res => {
        if (res.length === 0) {
          throw new Error('Пустой масив');
        }

        setGoods(res);
      });
    }

    if (select === 'five') {
      get5First().then(res => {
        setGoods(res);
      });
    }

    if (select === 'red') {
      getRedGoods().then(res => {
        setGoods(res);
      });
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getGoods('all');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          getGoods('five');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getGoods('red');
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
