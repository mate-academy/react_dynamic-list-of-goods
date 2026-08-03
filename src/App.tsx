import React from 'react';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  const handleLoad = (loader: () => Promise<Good[]>) => {
    loader().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => handleLoad(getAll)}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoad(get5First)}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => handleLoad(getRedGoods)}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
