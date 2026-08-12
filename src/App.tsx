import React, { useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const handleError = useCallback((err: unknown) => {
    setError(err instanceof Error ? err.message : 'Something went wrong');
    setGoods([]);
  }, []);

  const loadAll = useCallback(() => {
    setError(null);
    getAll().then(setGoods).catch(handleError);
  }, [handleError]);

  const loadFiveFirst = useCallback(() => {
    setError(null);
    get5First().then(setGoods).catch(handleError);
  }, [handleError]);

  const loadRed = useCallback(() => {
    setError(null);
    getRedGoods().then(setGoods).catch(handleError);
  }, [handleError]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFiveFirst}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      {error && (
        <p className="error" data-cy="error">
          {error}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
