import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = React.useState<Good[]>([]);

  const goodsSetter = (callback: Good[]) => {
    setGoodsList(callback);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={async () => goodsSetter(await getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => goodsSetter(await get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => goodsSetter(await getRed())}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
