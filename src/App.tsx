import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = React.memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAllGoods = useCallback(async () => {
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
      setError(null);
    } catch (err) {
      setError('Failed to load goods. Please try again later.');
    }
  }, []);

  const load5FirstGoods = useCallback(async () => {
    try {
      const firstFiveGoods = await get5First();

      setGoods(firstFiveGoods);
      setError(null);
    } catch (err) {
      setError('Failed to load goods. Please try again later.');
    }
  }, []);

  const loadRedGoods = useCallback(async () => {
    try {
      const redGoods = await getRedGoods();

      setGoods(redGoods);
      setError(null);
    } catch (err) {
      setError('Failed to load goods. Please try again later.');
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error && <div className="error-message">{error}</div>}

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
});

App.displayName = 'App';
export default App;
