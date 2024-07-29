import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [goodsNumber, setGoodsNumber] = useState('');

  useEffect(() => {
    if (goodsNumber === 'all') {
      getAll().then(setGoods);
    }

    if (goodsNumber === 'five') {
      get5First().then(setGoods);
    }

    if (goodsNumber === 'red') {
      getRedGoods().then(setGoods);
    }
  }, [goodsNumber]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setGoodsNumber('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setGoodsNumber('five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setGoodsNumber('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
