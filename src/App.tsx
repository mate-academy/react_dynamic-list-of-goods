import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(allGoods => setGoods(allGoods))
      // eslint-disable-next-line no-alert
      .catch(error => alert(error.message));
  };

  const load5Goods = () => {
    get5First().then(someGoods => setGoods(someGoods))
      // eslint-disable-next-line no-alert
      .catch(error => alert(error.message));
  };

  const loadRedGoods = () => {
    getRedGoods().then(allGoods => setGoods(allGoods))
      // eslint-disable-next-line no-alert
      .catch(error => alert(error.message));
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
        onClick={load5Goods}
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
