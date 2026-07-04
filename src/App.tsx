import { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// Exporting as a named function to fix the import mismatch in index.tsx
export function App() {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null); // Added error state

  // Memoizing handlers with useCallback
  const loadAll = useCallback(async () => {
    try {
      setError(null);
      const goodsFrom = await getAll();

      setGoods(goodsFrom);
    } catch (err) {
      // 1. Remove the ': any'
      // 2. Check if the error is a standard JavaScript Error object
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to load goods');
      }
    }
  }, []);

  const loadFirstFive = useCallback(async () => {
    try {
      setError(null);
      const goodsFrom = await get5First();

      setGoods(goodsFrom);
    } catch (err) {
      // Check if err is a standard Error object to safely read .message
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to load goods');
      }
    }
  }, []);

  const loadRed = useCallback(async () => {
    try {
      setError(null);
      const goodsFrom = await getRedGoods();

      setGoods(goodsFrom);
    } catch (err) {
      // Check if err is a standard Error object to safely read .message
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to load goods');
      }
    }
  }, []);


  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {/* Displaying the error to the user if one occurs */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
}
