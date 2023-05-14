import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const getGoods = (filterFunction: () => Promise<Good[]>) => {
    try {
      filterFunction()
        .then(goods => setVisibleGoods(goods));
    } catch (error) {
      throw new Error();
    }
  };

  const handleGetAll = useCallback(() => getGoods(getAll), []);
  const handleGet5First = useCallback(() => getGoods(get5First), []);
  const handleGetRedGoods = useCallback(() => getGoods(getRedGoods), []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
