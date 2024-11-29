import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setSortAll] = useState<Good[]>([]);

  const handleSortAll = () => {
    getAll().then(data => {
      setSortAll(data);
    });
  };

  const handleLoad5First = () => {
    get5First().then(data => {
      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

      setSortAll(sortedData.slice(0, 5));
    });
  };

  const handleClickRed = () => {
    getRedGoods().then(data => {
      const sortRedGoods = data.filter(red => red.color === 'red');

      setSortAll(sortRedGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleSortAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleClickRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
