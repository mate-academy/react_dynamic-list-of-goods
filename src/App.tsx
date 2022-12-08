import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll()
          .then(allGoods => setSelectedGoods(allGoods))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First()
          .then(firstFiveGoods => setSelectedGoods(firstFiveGoods))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRed()
          .then(redGoods => setSelectedGoods(redGoods))}
      >
        Load red goods
      </button>

      <GoodsList goods={selectedGoods} />
    </div>
  );
};
