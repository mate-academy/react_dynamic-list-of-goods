import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);

  const handleGetAll = () => {
    getAll().then(setGoods);
  };

  const handleGet5First = () => {
    get5First()
      .then(fetchedGoods => {
        return fetchedGoods.sort((a, b) => a.name.localeCompare(b.name));
      })
      .then(sortedGoods => {
        return sortedGoods.slice(0, 5);
      })
      .then(setGoods);
  };

  const handleGetRedGoods = () => {
    getRedGoods()
      .then(fetchedGoods => {
        return fetchedGoods.filter(good => good.color === 'red');
      })
      .then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
