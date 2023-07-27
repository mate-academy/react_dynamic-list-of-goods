import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAll = () => {
    getAll()
      .then(visibleGoods => setGoods(visibleGoods))
      .catch(error => {
        throw new Error(error);
      });
  };

  const showFirstFive = () => {
    get5First()
      .then(visibleGoods => setGoods(visibleGoods))
      .catch(error => {
        throw new Error(error);
      });
  };

  const showOnlyRed = () => {
    getRedGoods()
      .then(visibleGoods => setGoods(visibleGoods))
      .catch(error => {
        throw new Error(error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={showAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={showFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={showOnlyRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
