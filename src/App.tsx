import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [sortGoods, setSortGoods] = useState<Good[]>([]);

  const handleClick = async (promise: Promise<Good[]>) => {
    try {
      const result = await promise;

      setSortGoods(result);
    } catch (error: unknown) {
      // eslint-disable-next-line no-alert
      alert(`Network Error: ${error}`);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(getRedGoods())}
      >
        Load red goods
      </button>

      {sortGoods.length > 0 && (
        <GoodsList goods={sortGoods} />
      )}
    </div>
  );
};
