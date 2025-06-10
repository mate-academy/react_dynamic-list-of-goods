import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [data, setData] = useState<Good[]>([]);

  const loadAll = () => getAll().then(setData);
  const load5 = () => get5First().then(setData);
  const loadRed = () => getRedGoods().then(setData);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={loadAll}
        type="button"
        data-cy="all-button"
        className="button"
      >
        Load all goods
      </button>

      <button
        onClick={load5}
        type="button"
        data-cy="first-five-button"
        className="button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={loadRed}
        type="button"
        data-cy="red-button"
        className="button"
      >
        Load red goods
      </button>

      <GoodsList goods={data} />
    </div>
  );
};
