import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorDataFromServer, setErrorDataFromServer] = useState(false);

  const handleGetAll = useCallback(async () => {
    setErrorDataFromServer(false);
    try {
      const goodsList = await getAll();

      setGoods(goodsList);
    } catch {
      setErrorDataFromServer(true);
    }
  }, []);

  const handleGet5First = useCallback(async () => {
    setErrorDataFromServer(false);
    try {
      const goodsList = await get5First();

      setGoods(goodsList);
    } catch {
      setErrorDataFromServer(true);
    }
  }, []);

  const handleRedGoods = useCallback(async () => {
    setErrorDataFromServer(false);
    try {
      const goodsList = await getRedGoods();

      setGoods(goodsList);
    } catch {
      setErrorDataFromServer(true);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      {errorDataFromServer
        ? (<p>Error loading from server</p>)
        : (<GoodsList goods={goods} />)}
    </div>
  );
};
