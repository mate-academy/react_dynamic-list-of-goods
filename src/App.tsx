import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleShowAllGoods = () => {
    getAll()
      .then(setGoods)
      .catch(error =>
        // eslint-disable-next-line no-console
        console.error('Failed to fetch all goods:', error),
      );
  };

  const handleShowFiveFirstGoods = () => {
    get5First()
      .then(setGoods)
      .catch(error =>
        // eslint-disable-next-line no-console
        console.error('Failed to fetch the first 5 goods:', error),
      );
  };

  const handleShowRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error =>
        // eslint-disable-next-line no-console
        console.error('Failed to fetch red goods:', error),
      );
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleShowAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleShowFiveFirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleShowRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
