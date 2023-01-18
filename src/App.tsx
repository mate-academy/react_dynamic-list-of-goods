import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [renderedGoods, setRenderedGoods] = useState<Good[]>([]);
  const fetchWith = async (fetch: Promise<Good[]>) => {
    const promisedGoods = await fetch;

    setRenderedGoods(promisedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => fetchWith(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => fetchWith(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => fetchWith(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={renderedGoods} />
    </div>
  );
};
