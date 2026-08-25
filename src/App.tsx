import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    return getAll()
      .then(data => setGoods(data))
      .catch();
  };

  const handleLoadFive = () => {
    return get5First()
      .then(data => setGoods(data))
      .catch();
  };

  const handleRedGoods = () => {
    return getRedGoods()
      .then(data => setGoods(data))
      .catch();
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
