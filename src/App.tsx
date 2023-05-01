import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isError, setError] = useState(false);
  const onClick = async (handleFunc: () => Promise<Good[]>) => {
    try {
      const visibleGoods = await handleFunc();

      setGoods(visibleGoods);
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => onClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => onClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => onClick(getRed)}
      >
        Load red goods
      </button>

      {isError
        ? <div>Oops, something went wrong</div>
        : <GoodsList goods={goods} />}
    </div>
  );
};
