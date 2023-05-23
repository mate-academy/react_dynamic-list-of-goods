import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);
  const [error, setError] = useState('');

  const renderAll = () => {
    setError('');
    getAll()
      .then(setGoods)
      .catch(dataError => setError(dataError.message));
  };

  const render5First = () => {
    setError('');
    get5First()
      .then(setGoods)
      .catch(dataError => setError(dataError.message));
  };

  const renderRedGoods = () => {
    setError('');
    getRedGoods()
      .then(setGoods)
      .catch(dataError => setError(dataError.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={renderAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={render5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={renderRedGoods}
      >
        Load red goods
      </button>

      {error
        ? <p>{error}</p>
        : <GoodsList goods={goods} />}
    </div>
  );
};
