import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, getFirstFive, getAllRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function getAllGoods() {
    getAll()
      .then(resultAll => setGoods(resultAll));
  }

  function getFive() {
    getFirstFive()
      .then(resultFive => setGoods(resultFive));
  }

  function getRed() {
    getAllRed()
      .then(resultRed => setGoods(resultRed));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
