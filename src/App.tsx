import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

//import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  function loadGoods(apiFunction: () => Promise<Good[]>) {
    setErrorMessage('');
    apiFunction()
      .then(allGoods => {
        setGoods(allGoods);
      })
      .catch(error => {
        // eslint-disable-next-line
        console.log(error);
        setErrorMessage('Products Loading Unsuccessful');
      });
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {errorMessage ? <p>{errorMessage}</p> : <GoodsList goods={goods} />}
    </div>
  );
};
