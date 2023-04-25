import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);

  const handleVisibleGoods = async (promise: Promise<Good[]>) => {
    const result = await promise;

    setGoods(result);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleVisibleGoods(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleVisibleGoods(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleVisibleGoods(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
