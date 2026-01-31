import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = () => {
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => {});
  };

  const loadFirstFive = () => {
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => {});
  };

  const loadRed = () => {
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => {});
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
