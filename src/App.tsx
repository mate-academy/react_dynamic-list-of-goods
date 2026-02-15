import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleLoadAll = () => {
    setHasError(false);

    getAll()
      .then(data => setGoods(data))
      .catch(() => setHasError(true));
  };

  const handleLoadFiveGoods = () => {
    setHasError(false);

    get5First()
      .then(data => setGoods(data))
      .catch(() => setHasError(true));
  };

  const handleLoadRedGoods = () => {
    setHasError(false);

    getRedGoods()
      .then(data => setGoods(data))
      .catch(() => setHasError(true));
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
        onClick={handleLoadFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      {hasError && <p>Something went wrong</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
