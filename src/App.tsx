import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const hendelGet5Firs = () => {
    get5First().then((good: Good[]) => setGoods(good));
  };

  const hendelGetAll = () => {
    getAll().then((good: Good[]) => setGoods(good));
  };

  const hendelGetRed = () => {
    getRedGoods().then((good: Good[]) => setGoods(good));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={hendelGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={hendelGet5Firs}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={hendelGetRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
