import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [items, setItems] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll().then(goods => setItems(goods));
  };

  const load5First = () => {
    get5First().then(goods => setItems(goods));
  };

  const loadRed = () => {
    getRedGoods().then(goods => setItems(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAllGoods} data-cy="all-button">
        Load all goods
      </button>

      <button type="button" onClick={load5First} data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" onClick={loadRed} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={items} />
    </div>
  );
};
