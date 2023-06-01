import React, { useEffect, useState } from 'react';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [goodsType, setGoodsType] = useState('');

  useEffect(() => {
    if (goodsType === 'all') {
      getAll().then(type => setGoods(type));
    }

    if (goodsType === 'sort') {
      get5First().then(type => setGoods(type));
    }

    if (goodsType === 'red') {
      getRedGoods().then(type => setGoods(type));
    }
  }, [goodsType]);

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        className="btn"
        type="button"
        data-cy="all-button"
        onClick={() => setGoodsType('all')}
      >
        Load all goods
      </button>

      <button
        className="btn"
        type="button"
        data-cy="first-five-button"
        onClick={() => setGoodsType('sort')}
      >
        Load 5 first goods
      </button>

      <button
        className="btn"
        type="button"
        data-cy="red-button"
        onClick={() => setGoodsType('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
