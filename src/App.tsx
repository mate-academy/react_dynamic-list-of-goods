import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const addAllGoods = () => {
    getAll().then((preparedGoods: Good[]) => setGoods(preparedGoods));
  };

  const first5Goods = () => {
    get5First().then((preparedGoods: Good[]) => setGoods(preparedGoods));
  };

  const redGoods = () => {
    getRedGoods().then((preparedGoods: Good[]) => setGoods(preparedGoods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={addAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={first5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={redGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
