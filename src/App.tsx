import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<
    Array<{ id: number; name: string; color: string }>
  >([]);
  const [error, setError] = React.useState<string | null>(null);

  const loadAllGoods = React.useCallback(async () => {
    try {
      setError(null);
      const allGoods = await getAll();
      setGoods(allGoods);
    } catch (err) {
      setError('Failed to load goods. Please try again.');
      setGoods([]);
    }
  }, []);

  const loadFirstFive = React.useCallback(async () => {
    try {
      setError(null);
      const firstFive = await get5First();
      setGoods(firstFive);
    } catch (err) {
      setError('Failed to load goods. Please try again.');
      setGoods([]);
    }
  }, []);

  const loadRedGoods = React.useCallback(async () => {
    try {
      setError(null);
      const redGoods = await getRedGoods();
      setGoods(redGoods);
    } catch (err) {
      setError('Failed to load goods. Please try again.');
      setGoods([]);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <div className="error-message">{error}</div>}

      <div className="button-group">
        <button type="button" data-cy="all-button" onClick={loadAllGoods}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={loadFirstFive}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={loadRedGoods}>
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
