import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAllButtonClick = () => {
    getAll().then(goodsFromServer => setGoods(goodsFromServer));
  };

  const handleGetFirstFiveButtonClick = () => {
    get5First().then(goodsFromServer => setGoods(goodsFromServer));
  };

  const handleGetRedButtonClick = () => {
    getRedGoods().then(goodsFromServer => setGoods(goodsFromServer));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAllButtonClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGetFirstFiveButtonClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedButtonClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
