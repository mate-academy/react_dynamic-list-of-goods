import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

import { Good } from './types/Good';

export const App: React.FC = () => {
  const [currentList, setCurrentList] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => goodsAPI.getAll().then(setCurrentList)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={
          () => goodsAPI.get5First().then(goods => setCurrentList(goods)) // поясніть чому можна так
        }
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => goodsAPI.getRedGoods().then(setCurrentList)} // і так?
      >
        Load red goods
      </button>

      <GoodsList goods={currentList} />
    </div>
  );
};
