import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, getByQuantity, getByColor } from './api/goods';
import { Good } from './types/Good';
import { GOOD } from './constants/Goods/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll()
      .then(good => setGoods(good));
  };

  const handleFirstFive = () => {
    getByQuantity(GOOD.LIMIT)
      .then(good => setGoods(good));
  };

  const handleRedOnly = () => {
    getByColor(GOOD.COLOR)
      .then(good => setGoods(good));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAll}
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
        onClick={handleRedOnly}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
