import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { ShowGoods } from './types/ShowGoods';

const FILTER = {
  all: 'all',
  first5: 'first5',
  red: 'red',
} as const;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [showedGoods, setShowedGoods] = useState<ShowGoods | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    switch (showedGoods) {
      case FILTER.all:
        getAll().then(setGoods).catch(setError);

        break;
      case FILTER.first5:
        get5First().then(setGoods).catch(setError);

        break;
      case FILTER.red:
        getRedGoods().then(setGoods).catch(setError);

        break;
      default:
        setGoods([]);
        break;
    }
  }, [showedGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setShowedGoods(FILTER.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setShowedGoods(FILTER.first5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setShowedGoods(FILTER.red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods ?? []} />
      {error !== null && <p>{error}</p>}
    </div>
  );
};
