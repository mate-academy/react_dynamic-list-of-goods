import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visiblegoods, setVisiblegoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll().then(good => setVisiblegoods(good));
        }}
      >
        Load all goods
      </button>

      <button
        onClick={() => {
          get5First().then(
            good => setVisiblegoods(good),
          );
        }}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => {
          // eslint-disable-next-line max-len
          getRedGoods().then(good => setVisiblegoods(good));
        }}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={visiblegoods} />
    </div>
  );
};
