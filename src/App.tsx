import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App content">
      <div className="box content-container">
        <h1 className="">Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={() => getAll().then(setGoods)}
          className="button"
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => get5First().then(setGoods)}
          className="button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => getRedGoods().then(setGoods)}
          className="button"
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    </div>
  );
};
