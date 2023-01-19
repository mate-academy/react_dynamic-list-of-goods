import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoods = (getGoods: Promise<Good[]>) => (
    getGoods.then(setGoods)
  );

  return (
    <div className="App">
      <h1 className="header">Dynamic list of Goods</h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={() => allGoods(getAll())}
      >
        Load all goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={() => allGoods(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={() => allGoods(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
