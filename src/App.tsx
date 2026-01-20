import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, seterrorMessage] = useState<string>('');

  const handleAllGoods = () => {
    seterrorMessage('');
    getAll()
      .then(fetchedGoods => {
        setGoods(fetchedGoods);
      })
      .catch(() => {
        seterrorMessage('Failed to load all goods.');
      });
  };

  const handleFirst5 = () => {
    seterrorMessage('');
    get5First()
      .then(fetchedGoods => {
        setGoods(fetchedGoods);
      })
      .catch(() => {
        seterrorMessage('Failed to load 5 goods.');
      });
  };

  const handleRedGoods = () => {
    seterrorMessage('');
    getRedGoods()
      .then(fetchedGoods => {
        setGoods(fetchedGoods);
      })
      .catch(() => {
        seterrorMessage('Failed to load red goods.');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleFirst5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
