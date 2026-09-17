import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

type LoadGoods = () => Promise<Good[]>;

const ERROR_MESSAGE = 'Unable to load goods. Please try again.';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadGoods = useCallback(async (load: LoadGoods) => {
    try {
      setError('');
      setGoods(await load());
    } catch {
      setGoods([]);
      setError(ERROR_MESSAGE);
    }
  }, []);

  const handleLoadAll = useCallback(() => {
    loadGoods(goodsAPI.getAll);
  }, [loadGoods]);

  const handleLoadFirstFive = useCallback(() => {
    loadGoods(goodsAPI.get5First);
  }, [loadGoods]);

  const handleLoadRed = useCallback(() => {
    loadGoods(goodsAPI.getRedGoods);
  }, [loadGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {error && <p role="alert">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
