import React, { useRef, useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import {
  getAllGoods,
  getFirstFiveSortedByName,
  getRedGoods,
} from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const controllerRef = useRef<AbortController | null>(null);

  const run = useCallback(
    async (loader: (signal: AbortSignal) => Promise<Good[]>) => {
      controllerRef.current?.abort();

      const controller = new AbortController();

      controllerRef.current = controller;

      setLoading(true);
      setError('');

      try {
        const data = await loader(controller.signal);

        setGoods(data);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return;
        }

        const message =
          err instanceof Error ? err.message : 'Failed to load goods';

        setError(message);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const loadAll = useCallback(() => run(getAllGoods), [run]);
  const loadFirstFive = useCallback(() => run(getFirstFiveSortedByName), [run]);
  const loadRedOnly = useCallback(() => run(getRedGoods), [run]);

  return (
    <div className="App">
      <h1>Dynamic list of goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAll}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFirstFive}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedOnly}
        disabled={loading}
      >
        Load red goods
      </button>

      {loading && <p>Loading…</p>}
      {!loading && error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
