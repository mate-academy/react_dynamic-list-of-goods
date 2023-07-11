import React, { useState } from 'react';
import 'bulma';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleGoodsChange = async (callback: () => Promise<Good[]>) => {
    callback().then(goods => setVisibleGoods(goods));
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-info"
        onClick={() => handleGoodsChange(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-info"
        onClick={() => handleGoodsChange(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-info"
        onClick={() => handleGoodsChange(getRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
