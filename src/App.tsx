import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [displayedGoods, setDisplayedGoods] = useState<Good[]>([]);

  const asyncCall = async (func: () => Promise<Good[]>) => {
    const result = await func();

    setDisplayedGoods(result);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => asyncCall(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => asyncCall(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => asyncCall(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={displayedGoods} />
    </div>
  );
};
