import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll().then(setGoods);
  };

  const firstFiveGoods = () => {
    get5First().then(items => {
      const sortedItems = items.sort((item1, item2) => {
        return item1.name.localeCompare(item2.name);
      });

      setGoods(sortedItems.slice(0, 5));
    });
  };

  const getAllRedGoods = () => {
    getRedGoods().then(items => {
      const filteredItems = items.filter(item => {
        return item.color === 'red';
      });

      setGoods(filteredItems);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={firstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getAllRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
}
