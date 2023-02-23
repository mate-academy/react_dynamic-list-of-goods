import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [handleError, setError] = useState(false);

  const loadAll = async () => {
    setError(false);
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch {
      setError(true);
    }
  };

  const loadFive = async () => {
    setError(false);
    try {
      const firstFiveGoods = await get5First();

      setGoods(firstFiveGoods);
    } catch {
      setError(true);
    }
  };

  const loadRed = async () => {
    setError(false);
    try {
      const RedGoods = await getRedGoods();

      setGoods(RedGoods);
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
        onClick={loadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadFive()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadRed()}
      >
        Load red goods
      </button>

      {handleError ? (
        <h1 style={{
          background: '#F79292',
          padding: '10px',
          borderRadius: '10px',
          color: '#fff',

        }}
        >
          Goods hanst been loaded
        </h1>
      ) : (goods.length > 0 && (
        <GoodsList goods={goods} />
      )

      )}
    </div>
  );
};
