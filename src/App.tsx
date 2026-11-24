import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAllGoods = () => {
    setErrorMessage('');
    goodsAPI
      .getAll()
      .then(setVisibleGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handle5Goods = () => {
    setErrorMessage('');
    goodsAPI
      .get5First()
      .then(setVisibleGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const handleRedGoods = () => {
    setErrorMessage('');
    goodsAPI
      .getRedGoods()
      .then(setVisibleGoods)
      .catch(error => setErrorMessage(error.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handle5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      {errorMessage && (
        <div className="notification is-danger">{errorMessage}</div>
      )}
      {!errorMessage && <GoodsList goods={visibleGoods} />}
    </div>
  );
};
