import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadGoods = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const data = await getAll();

      setGoods(data);
    } catch (err) {
      setError('Could not load goods');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handle5FirstGoods = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const data5 = await get5First();

      setGoods(data5);
    } catch (err) {
      setError('Could not load goods');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleGoodRed = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const dataRed = await getRed();

      setGoods(dataRed);
    } catch (err) {
      setError('Could not load goods');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadGoods}
        disabled={isLoading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstGoods}
        disabled={isLoading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGoodRed}
        disabled={isLoading}
      >
        Load red goods
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
