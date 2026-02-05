import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [list, setList] = useState<Good[]>([]);
  const [isError, setIsError] = useState(false);

  const handleLoadAll = () => {
    setIsError(false);

    return getAll()
      .then(loadedGoods => setList(loadedGoods))
      .catch(() => setIsError(true));
  };

  const handleLoadFive = () => {
    setIsError(false);

    return get5First()
      .then(loadedGoods => setList(loadedGoods))
      .catch(() => setIsError(true));
  };

  const handleLoadRed = () => {
    setIsError(false);

    return getRedGoods()
      .then(loadedGoods => setList(loadedGoods))
      .catch(() => setIsError(true));
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

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={list} />
      {isError && <p style={{ color: 'red' }}>Something went wrong!</p>}
    </div>
  );
};
