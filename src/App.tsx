import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [goodsRequest, setGoodsRequest] = useState('');

  useEffect(() => {
    switch (goodsRequest) {
      case 'all':
        getAll()
          .then(setGoods);
        break;

      case 'first 5':
        get5First()
          .then(setGoods);
        break;

      case 'all red':
        getRedGoods()
          .then(setGoods);
        break;

      default:
        break;
    }
  }, [goodsRequest]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setGoodsRequest('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setGoodsRequest('first 5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setGoodsRequest('all red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
