import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = () => {
    goodsAPI.getAll().then(setGoods);
  };

  const load5First = () => {
    goodsAPI.get5First().then(setGoods);
  };

  const loadRedGoods = () => {
    goodsAPI.getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={loadAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={load5First} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={loadRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
