/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';

import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const initial: Good[] = [];

  const [goods, setGoods] = useState(initial);

  const updateState = (modifiedArray: Good[]) => setGoods(modifiedArray);

  const handleAllGoods = () => getAll().then(updateState);
  const handle5Goods = () => get5First().then(updateState);
  const handleRedGoods = () => getRedGoods().then(updateState);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={handleAllGoods}
      >
        Load all goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={handle5Goods}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      {goods.length
        ? <GoodsList goods={goods} />
        : (
          <div className="empty-data">
            Data from Server is not loaded yet
          </div>
        )}

    </div>
  );
};
