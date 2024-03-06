import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll().then(goodsfromServer => {
      setGoods(goodsfromServer);
    });
  };

  const handle5Goods = () => {
    get5First().then(goodsfromServer => {
      setGoods(goodsfromServer);
    });
  };

  const handleRedGoods = () => {
    getRedGoods().then(goodsfromServer => {
      setGoods(goodsfromServer);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handle5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
