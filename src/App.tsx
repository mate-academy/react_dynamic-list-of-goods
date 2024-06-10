import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const handleLoadAllGoods = () => {
    getAll().then(goods => setGoodsList(goods));
  };

  const handleLoad5FirstGoods = () => {
    get5First().then(firstFiveGoods => setGoodsList(firstFiveGoods));
  };

  const handleLoadRedGoods = () => {
    getRedGoods().then(redGoods => setGoodsList(redGoods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
