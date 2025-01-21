import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [queryset, setQueryset] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <h2></h2>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll().then(allGoods => setQueryset(allGoods));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First().then(goods => setQueryset(goods));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods().then(goods => setQueryset(goods));
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={queryset} />
    </div>
  );
};
