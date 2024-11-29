import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickAll = () => {
    getAll().then(visibleGoods => setGoods(visibleGoods));
  };

  const handleClickForFirstFive = () => {
    get5First().then(visibleGoods => setGoods(visibleGoods));
  };

  const handleClickSortRed = () => {
    getRedGoods().then(visibleGoods => setGoods(visibleGoods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClickAll()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClickForFirstFive()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClickSortRed()}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
