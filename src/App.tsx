import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [error, setError] = React.useState<Error | null>(null);
  function showGoods(getGoods: () => Promise<Good[]>) {
    getGoods()
      .then(newGoods => setGoods(newGoods))
      .catch(error => {
        setError(error);
      });
  }
  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => showGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => showGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => showGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
      {error && <div>Error</div>}
    </div>
  );
};
