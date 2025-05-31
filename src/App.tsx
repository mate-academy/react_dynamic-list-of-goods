import * as React from 'react';
import { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';

import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll().then(setGoods);
  };

  const getFiveFirstGoods = () => {
    get5First().then(setGoods);
  };

  const getRedGoods = () => {
    getRed().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={getAllGoods} data-cy="all-button">
        Load all goods
      </button>

      <button
        type="button"
        onClick={getFiveFirstGoods}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button type="button" onClick={getRedGoods} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
