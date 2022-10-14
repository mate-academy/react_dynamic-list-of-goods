import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visiableGoods, setVisiableGoods] = useState<Good[]>([]);

  const loaderGoods = async (sortType: Promise<Good[]>) => {
    const goods = await sortType;

    setVisiableGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loaderGoods(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loaderGoods(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loaderGoods(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={visiableGoods} />
    </div>
  );
};
