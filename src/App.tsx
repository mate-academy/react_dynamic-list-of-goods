import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const loadGoods = useCallback((request: () => Promise<Good[]>) => {
    setHasError(false);

    request()
      .then(setGoods)
      .catch(() => {
        setGoods([]);
        setHasError(true);
      });
  }, []);

  const handleLoadAll = () => {
    loadGoods(goodsAPI.getAll);
  };

  const handleLoadFirstFive = () => {
    loadGoods(goodsAPI.get5First);
  };

  const handleLoadRed = () => {
    loadGoods(goodsAPI.getRedGoods);
  };

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

      {hasError && <p data-cy="error">Something went wrong</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
