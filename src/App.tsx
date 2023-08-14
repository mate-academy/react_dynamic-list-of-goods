import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [filteredGoods, setfilteredGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => getAll().then(setfilteredGoods)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => get5First().then(setfilteredGoods)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => getRedGoods().then(setfilteredGoods)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={filteredGoods} />
    </div>
  );
};
