import React, { useState } from 'react';
import {
  getAll,
  get5First,
  getRedGoods,
} from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAllGoods = () => {
    return getAll().then(good => setGoods(good));
  };

  const showFirstFiveGoods = () => {
    return get5First().then(good => setGoods(good));
  };

  const showRedGoods = () => {
    return getRedGoods().then(good => setGoods(good));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={showAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={showFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={showRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
