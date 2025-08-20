import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleGetAllGoods = () => {
    setErrorMessage(null);
    getAll().then(setVisibleGoods).catch(setErrorMessage);
  };

  const handleGet5Goods = () => {
    setErrorMessage(null);
    get5First().then(setVisibleGoods).catch(setErrorMessage);
  };

  const handleGetRed = () => {
    setErrorMessage(null);
    getRedGoods().then(setVisibleGoods).catch(setErrorMessage);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5Goods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRed}>
        Load red goods
      </button>

      {errorMessage && <p className="error">{errorMessage}</p>}
      <GoodsList goods={visibleGoods} />
    </div>
  );
};
