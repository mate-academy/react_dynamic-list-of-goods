import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const { getAll, get5First, getRedGoods } = goodsAPI;
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  useEffect(() => {
    getAll()
      .then(setVisibleGoods);
  }, []);

  const handleAll = () => {
    getAll()
      .then(setVisibleGoods);
  };

  const handleFiveFirst = () => {
    get5First()
      .then(setVisibleGoods);
  };

  const handleRed = () => {
    getRedGoods()
      .then(setVisibleGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveFirst}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRed}>
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
