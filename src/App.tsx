import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() =>
          getAll()
            .then(setGoods)
            .catch(e => {
              setError(e instanceof Error ? e.message : 'Failed to load goods');
            })
        }
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() =>
          get5First()
            .then(setGoods)
            .catch(e => {
              setError(e instanceof Error ? e.message : 'Failed to load goods');
            })
        }
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() =>
          getRedGoods()
            .then(setGoods)
            .catch(e => {
              setError(e instanceof Error ? e.message : 'Failed to load goods');
            })
        }
      >
        Load red goods
      </button>

      {error && <p>{error}</p>}
      {!error && <GoodsList goods={goods} />}
    </div>
  );
};
