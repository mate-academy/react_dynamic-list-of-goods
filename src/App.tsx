import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [filterGoods, setFilterGoods] = useState<Good[]>([]);

  const handleGetAllChange = () => {
    getAll().then(goods => {
      setFilterGoods(goods);
    });
  };

  const handleGet5Change = () => {
    get5First().then(goods => {
      setFilterGoods(goods);
    });
  };

  const handleGetRedChange = () => {
    getRedGoods().then(goods => {
      setFilterGoods(goods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAllChange}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5Change}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedChange}>
        Load red goods
      </button>

      <GoodsList goods={filterGoods} />
    </div>
  );
};
