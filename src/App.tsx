import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = useCallback(() => {
    getAll()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  const handleLoadFive = useCallback(() => {
    get5First()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  const handleLoadRed = useCallback(() => {
    getRedGoods()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
