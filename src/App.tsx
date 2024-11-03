import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);

  const fetchGoods = async (cb: () => Promise<Good[]>) => {
    try {
      const data: Good[] = await cb();

      setGoods(data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      }
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => fetchGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => fetchGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => fetchGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {goods && <GoodsList goods={goods} />}
    </div>
  );
};
