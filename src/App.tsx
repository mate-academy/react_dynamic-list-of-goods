import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    try {
      getAll().then(setGoods);
    } catch (e) {
      throw new Error(`${e} happenned on handling all goods`);
    }
  };

  const handleFirstFive = () => {
    try {
      get5First().then(setGoods);
    } catch (e) {
      throw new Error(`${e} happened on first 5 elements`);
    }
  };

  const handleRedGoods = () => {
    try {
      getRedGoods().then(setGoods);
    } catch (e) {
      throw new Error(`${e} happened while handling red goods`);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
