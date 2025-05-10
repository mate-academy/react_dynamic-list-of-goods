import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [user, setUser] = useState<Good[]>([]);
  const [api, setApi] = useState<Promise<Good[]> | null>(null);

  useEffect(() => {
    if (api) {
      api.then(setUser);
    }
  }, [api]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => setApi(getAll)}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setApi(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setApi(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={user} />
    </div>
  );
};
