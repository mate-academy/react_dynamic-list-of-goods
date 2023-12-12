import React, { useState, useEffect } from 'react';
import { Good } from './types/Good';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [currentGoods, setCurrentGoods] = useState<Good[]>([]);

  useEffect(() => {
    getAll()
      .then(setCurrentGoods);
  }, []);

  const handleloadAll = () => {
    getAll()
      .then(setCurrentGoods);
  };

  const handleLoadByLimit = (limit: number) => {
    get5First(limit)
      .then(setCurrentGoods);
  };

  const handleLoadByColor = (color: string) => {
    getRedGoods(color)
      .then(setCurrentGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleloadAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadByLimit(5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadByColor('red')}
      >
        Load red goods
      </button>

      {currentGoods.length > 0
        && <GoodsList goods={currentGoods} />}
    </div>
  );
};
