import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAllGoods().then(good => setGoods(good));
  };

  const load5FirstGoods = () => {
    get5FirstGoods().then(good => setGoods(good));
  };

  const loadRedGoods = () => {
    getRedGoods().then(good => setGoods(good));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
