import React from 'react';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const load = (promise: Promise<Good[]>) => {
    setError(null);

    return promise.then(setGoods).catch(() => {
      setError('Failed to load goods');
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={() => load(getAll())} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={() => load(get5First())}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => load(getRedGoods())}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
    </div>
  );
};
