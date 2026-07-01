import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = useCallback((loader: () => Promise<Good[]>) => {
    setErrorMessage('');

    loader()
      .then(setGoods)
      .catch(error => {
        setGoods([]);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'Unable to load goods. Please try again.',
        );
      });
  }, []);

  const loadAllGoods = useCallback(() => {
    loadGoods(getAll);
  }, [loadGoods]);

  const load5FirstGoods = useCallback(() => {
    loadGoods(get5First);
  }, [loadGoods]);

  const loadRedGoods = useCallback(() => {
    loadGoods(getRedGoods);
  }, [loadGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

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

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
