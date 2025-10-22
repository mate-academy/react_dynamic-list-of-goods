import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = () => {
    getAll()
      .then(setGoods)
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Failed to load goods');
      });
  };

  const handleGet5First = () => {
    get5First()
      .then(setGoods)
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Failed to load goods');
      });
  };

  const handleGetRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Failed to load goods');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handleGetAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={handleGet5First}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={handleGetRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
