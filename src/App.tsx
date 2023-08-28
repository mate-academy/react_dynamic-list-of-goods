import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleAllGoods = async (fetchFunction: () => Promise<Good[]>) => {
    try {
      const good = await fetchFunction();

      setGoods(good);
      setError(null);
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (error) {
      setError('No gooods');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleAllGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleAllGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleAllGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList
        goods={goods}
        error={error}
      />
    </div>
  );
};
