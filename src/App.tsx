import React, { useEffect, useState } from 'react';

import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

type LoadFunction = (() => Promise<Good[]>) | null;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loadFunction, setLoadFunction] = useState<LoadFunction>(null);

  useEffect(() => {
    if (loadFunction) {
      loadFunction().then(setGoods);
    }
  }, [loadFunction]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => setLoadFunction(() => getAll)}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => setLoadFunction(() => get5First)}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => setLoadFunction(() => getRedGoods)}
        data-cy="red-button"
      >
        Load red goods
      </button>

      {goods
        ? <GoodsList goods={goods} />
        : null}
    </div>
  );
};
