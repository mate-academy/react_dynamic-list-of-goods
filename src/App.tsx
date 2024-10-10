import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>();

  const promiseToGoods = (goods: Good[]) => setVisibleGoods(goods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(promiseToGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(promiseToGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(promiseToGoods)}
      >
        Load red goods
      </button>

      {visibleGoods && <GoodsList goods={visibleGoods} />}
    </div>
  );
};
