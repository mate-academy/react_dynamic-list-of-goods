import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function handleClickGoods(getGoods: () => Promise<Good[]>) {
    try {
      const visibleGoods: Good[] = await getGoods();

      setGoods(visibleGoods);
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClickGoods(getAll)}
      >
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClickGoods(get5First)}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClickGoods(getRedGoods)}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
