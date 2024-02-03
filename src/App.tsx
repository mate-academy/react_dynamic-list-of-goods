import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './components/GoodList/Goodlist';

export const App: React.FC = () => {
  const [good, setGood] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(goods => setGood(goods))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(goods => setGood(goods))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(goods => setGood(goods))}
      >
        Load red goods
      </button>

      <GoodsList goods={good} />
    </div>
  );
};
