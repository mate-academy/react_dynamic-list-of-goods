// src/App.tsx
import React, { useState } from 'react';
import type { Good } from './types/Good';
import { GoodsList } from './components/GoodsList';
import { Loader } from './components/Loader';

import {
  getAllGoods,
  getFirst5GoodsSortedByName,
  getRedGoods,
} from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const load = async (loaderFn: () => Promise<Good[]>) => {
    setIsLoading(true);

    try {
      const data = await loaderFn();
      setGoods(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="buttons">
        <button type="button" onClick={() => load(getAllGoods)}>
          Load All goods
        </button>

        <button type="button" onClick={() => load(getFirst5GoodsSortedByName)}>
          Load 5 first goods
        </button>

        <button type="button" onClick={() => load(getRedGoods)}>
          Load red goods
        </button>
      </div>

      {isLoading ? <Loader /> : <GoodsList goods={goods} />}
    </div>
  );
};
