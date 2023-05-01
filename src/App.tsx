import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { get5First, getAll, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goodsToShow, setGoodsToShow] = useState<Good[]>([]);

  const handleClick = (callback: () => Promise<Good[]>) => {
    callback().then((goods) => setGoodsToShow(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(getRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsToShow} />
    </div>
  );
};
