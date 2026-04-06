import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = React.useCallback(() => {
    getAll()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error fetching goods:', error);
      });
  }, []);

  const handleLoad5First = React.useCallback(() => {
    get5First()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error fetching 5 first goods:', error);
      });
  }, []);

  const handleLoadRed = React.useCallback(() => {
    getRedGoods()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error fetching red goods:', error);
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
        onClick={handleLoad5First}
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
