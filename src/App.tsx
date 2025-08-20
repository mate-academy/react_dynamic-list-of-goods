import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = (goods: Good[]) => {
    setVisibleGoods(goods);
    setError(null);
  };

  const handleError = () => {
    setError('Failed to load goods');
    setVisibleGoods([]);
  };

  const handleGetAll = () => {
    getAll().then(handleSuccess).catch(handleError);
  };

  const handleGet5First = () => {
    get5First().then(handleSuccess).catch(handleError);
  };

  const handleGetRed = () => {
    getRed().then(handleSuccess).catch(handleError);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRed}>
        Load red goods
      </button>
      {error && <p className="error">{error}</p>}
      <GoodsList goods={visibleGoods} />
    </div>
  );
};
//test for ai
