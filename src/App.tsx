import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodList, setGoodList] = useState<Good[]>([]);

  const showAllGoods = () => {
    getAll().then(goods => setGoodList(goods));
  };

  const showFirstFiveGoods = () => {
    get5First().then(goods => setGoodList(goods));
  };

  const showRedGoods = () => {
    getRedGoods().then(goods => setGoodList(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={showFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goodList} />
    </div>
  );
};
