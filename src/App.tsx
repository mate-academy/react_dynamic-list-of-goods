/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleShowAllGoods = () => {
    return getAll()
      .then(receivedGoods => {
        console.log('Setting state with goods:', receivedGoods);
        setGoods(receivedGoods);
      })
      .catch(error => {
        console.error('Failed to fetch goods:', error);
      });
  };

  const handleShowFirstFiveGoods = () => {
    return get5First()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch the first 5 goods:', error);

        return [];
      });
  };

  const handleShowRedGoods = () => {
    return getRedGoods()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch red goods:', error);

        return [];
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button btn-1"
        onClick={handleShowAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button btn-2"
        onClick={handleShowFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button btn-3"
        onClick={handleShowRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
