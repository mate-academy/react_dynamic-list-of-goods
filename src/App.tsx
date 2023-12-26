import React, { useEffect, useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const visibleGoods = (visibleFunction: () => Promise<Good[]>) => {
    visibleFunction().then(setGoods);
  };

  useEffect(() => {
    visibleGoods(getAll);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          visibleGoods(getAll);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          visibleGoods(get5First);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          visibleGoods(getRedGoods);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
