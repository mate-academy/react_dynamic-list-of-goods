import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => getAll().then(items => setGoods(items));
  const loadFirstGoods = () => get5First().then(items => setGoods(items));
  const loadReadGoods = () => getRedGoods().then(items => setGoods(items));

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

      <button type="button" data-cy="red-button" onClick={loadReadGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
