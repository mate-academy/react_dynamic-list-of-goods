import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoodsHandler = () => {
    goodsAPI
      .getAll()
      .then(data => setGoods(data))
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load goods:', error);
      });
  };

  const load5FirstGoodsHandler = () => {
    goodsAPI
      .get5First()
      .then(data => setGoods(data))
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load First 5 goods:', error);
      });
  };

  const loadRedGoodsHandler = () => {
    goodsAPI
      .getRedGoods()
      .then(data => setGoods(data))
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load Red goods:', error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoodsHandler}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoodsHandler}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoodsHandler}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
