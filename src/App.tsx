import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [showGoods, setShowGoods] = useState<Good[]>([]);

  const handler = async (getGoods: () => Promise<Good[]>) => {
    const result = await getGoods();

    setShowGoods(result);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handler(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handler(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handler(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={showGoods} />
    </div>
  );
};
