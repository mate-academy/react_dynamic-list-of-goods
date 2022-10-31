import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleShowAll = () => (
    getAll().then(goodsFromServer => setVisibleGoods(goodsFromServer))
  );

  const handleFirstFive = () => (
    get5First().then(goodsFromServer => setVisibleGoods(goodsFromServer))
  );

  const handleShowRed = () => (
    getRedGoods().then(goodsFromServer => setVisibleGoods(goodsFromServer))
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleShowAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleShowRed}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
