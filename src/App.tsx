import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function loadAllGoods() {
    getAll().then(good => setGoods(good));
  }

  function load5FirstGoods() {
    get5First().then(good => setGoods(good));
  }

  function loadRedGoods() {
    getRedGoods().then(good => setGoods(good));
  }

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
