import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll()
      .then(setGoods)
      // eslint-disable-next-line no-console
      .catch(error => console.warn(error));
  };

  const handleLoad5Goods = () => {
    get5First()
      .then(setGoods)
      // eslint-disable-next-line no-console
      .catch(error => console.warn(error));
  };

  const handleLoadRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      // eslint-disable-next-line no-console
      .catch(error => console.warn(error));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5Goods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
