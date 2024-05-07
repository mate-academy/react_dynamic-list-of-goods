import React, { useState } from 'react';
import './App.scss';

import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [preparedGoods, setPreparedGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => getAll().then(setPreparedGoods)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => get5First().then(setPreparedGoods)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => getRedGoods().then(setPreparedGoods)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={preparedGoods} />
    </div>
  );
};
