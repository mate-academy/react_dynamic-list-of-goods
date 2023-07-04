import React, { useState } from 'react';

import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';
import { Callback } from './types/Callback';

import './App.scss';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const getGoods = async (callback: Callback) => {
    const goods = await callback();

    setVisibleGoods(goods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => getGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
