import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll().then(setGoods);
  };

  const handleFiveGoods = () => {
    get5First()
      .then(allGoods => allGoods.sort((a, b) => a.name.localeCompare(b.name)))
      .then(allGoods => allGoods.slice(0, 5))
      .then(setGoods);
  };

  const handleOnlyRead = () => {
    getRedGoods()
      .then(allGoods => allGoods.filter(item => item.color === 'red'))
      .then(setGoods);
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
        onClick={handleFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleOnlyRead}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
