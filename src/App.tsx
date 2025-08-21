import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAllLoad = () => {
    getAll()
      .then(setGoods)
      .catch((reason: Error) => {
        setErrorMessage(reason.message);
      });
  };

  const handleFirst5Load = () => {
    get5First()
      .then(setGoods)
      .catch((reason: Error) => {
        setErrorMessage(reason.message);
      });
  };

  const handleAllRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch((reason: Error) => {
        setErrorMessage(reason.message);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllLoad}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5Load}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleAllRed}>
        Load red goods
      </button>

      {!errorMessage ? <GoodsList goods={goods} /> : <h2>{errorMessage}</h2>}
    </div>
  );
};
