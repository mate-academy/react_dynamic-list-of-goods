import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllButtonClick = () => {
    getAll().then(setGoods);
  };

  const handleFiveGoodsButtonClick = () => {
    get5First().then(setGoods);
  };

  const handleRedButtonClick = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllButtonClick}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveGoodsButtonClick}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedButtonClick}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
