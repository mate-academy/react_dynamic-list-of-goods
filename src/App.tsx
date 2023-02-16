import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const selectedList = (showGoods: Promise<Good[]>) => {
    showGoods.then((goods) => setGoodsList(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => selectedList(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => selectedList(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => selectedList(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
