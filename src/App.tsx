import React, { useState } from 'react';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll()
      .then(setGoods)
      .catch(() => {
        setGoods([]);
      });
  };

  const loadFiveGoods = () => {
    get5First()
      .then(setGoods)
      .catch(() => {
        setGoods([]);
      });
  };

  const loadRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => {
        setGoods([]);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFiveGoods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
