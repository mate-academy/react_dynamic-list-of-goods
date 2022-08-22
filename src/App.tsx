import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);

  const setLoadedGoods = (promise: () => Promise<Good[]>) => {
    promise().then(data => setSelectedGoods(data));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setLoadedGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setLoadedGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setLoadedGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {selectedGoods.length > 0
        && <GoodsList goods={selectedGoods} />}
    </div>
  );
};
