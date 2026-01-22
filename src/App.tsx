import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadAll = () => {
    setErrorMessage('');
    getAll()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later!'));
  };

  const load5First = () => {
    setErrorMessage('');
    get5First()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later!'));
  };

  const handleRedColor = () => {
    setErrorMessage('');
    getRedGoods()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later!'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedColor}>
        Load red goods
      </button>

      {errorMessage && <p className="Error">{errorMessage}</p>}

      {!errorMessage && goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
