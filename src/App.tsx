import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [fillterGoods, setFillterGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => goodsAPI.getAll().then(setFillterGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => goodsAPI.get5First().then(setFillterGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => goodsAPI.getRedGoods().then(setFillterGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={fillterGoods} />
    </div>
  );
};
