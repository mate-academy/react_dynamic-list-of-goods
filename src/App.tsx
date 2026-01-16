import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadAll = () => {
    getAll()
      .then(data => {
        setGoods(data);
        setErrorMessage('');
      })
      .catch(() => setErrorMessage('Error'));
  };

  const handleLoad5First = () => {
    get5First()
      .then(data => {
        setGoods(data);
        setErrorMessage('');
      })
      .catch(() => setErrorMessage('Error'));
  };

  const handleLoadRedGoods = () => {
    getRedGoods()
      .then(data => {
        setGoods(data);
        setErrorMessage('');
      })
      .catch(() => setErrorMessage('Error'));
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
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      {errorMessage && <p>{errorMessage}</p>}

      {goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
