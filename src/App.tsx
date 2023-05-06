import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App = React.memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadGoods = (goodsList: Good[]) => {
    setGoods(goodsList);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(handleLoadGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(handleLoadGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(handleLoadGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
});
