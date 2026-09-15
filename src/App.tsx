import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [list, setList] = useState<Good[]>([]);
  const [apiError, setApiError] = useState(false);

  const handleAPIError = useCallback((receivedPromise: Promise<Good[]>) => {
    receivedPromise
      .then(goods => {
        setApiError(false);
        setList(goods);
      })
      .catch(() => {
        setApiError(true);
      });
  }, []);

  const loadAllGoods = useCallback(() => {
    handleAPIError(getAll());
  }, [handleAPIError]);

  const loadFirstFive = useCallback(() => {
    handleAPIError(get5First());
  }, [handleAPIError]);

  const loadRedGoods = useCallback(() => {
    handleAPIError(getRedGoods());
  }, [handleAPIError]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      {list.length > 0 && !apiError && <GoodsList goods={list} />}

      {apiError && <p>API error couldn&apos;t get Data</p>}
    </div>
  );
};
