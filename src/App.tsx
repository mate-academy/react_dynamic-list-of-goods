import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAll = () => {
    getAll().then(newGoods => setGoods(newGoods));
  };

  const handle5First = () => {
    get5First().then(newGoods => setGoods(newGoods));
  };

  const handleRed = () => {
    getRedGoods().then(newGoods => setGoods(newGoods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handleAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={handle5First} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={handleRed} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
