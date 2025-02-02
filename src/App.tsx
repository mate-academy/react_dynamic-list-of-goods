import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(goodsFromserver => setGoods(goodsFromserver));
  };

  const load5FirstGoods = () => {
    get5First().then(goodsFromserver => setGoods(goodsFromserver));
  };

  const loadRedGoods = () => {
    getRedGoods().then(goodsFromserver => setGoods(goodsFromserver));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAllGoods} data-cy="all-button">
        Load all goods
      </button>

      <button
        type="button"
        onClick={load5FirstGoods}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button type="button" onClick={loadRedGoods} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
