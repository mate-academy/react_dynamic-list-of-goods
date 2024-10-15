import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(setGoods);
  };

  const loadFirstGoods = () => {
    getAll().then(g => {
      const sortedGoods = g.sort((a, b) => a.name.localeCompare(b.name));

      setGoods(sortedGoods.slice(0, 5));
    });
  };

  const loadRedGoods = () => {
    getAll().then(g => {
      const redGoods = g.filter(good => good.color === 'red');

      setGoods(redGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
