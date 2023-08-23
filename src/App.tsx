import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState([] as Good[]);
  const [errorMessage, setErrorMessage] = useState('');

  function setVisibleGoods(callback: () => Promise<Good[]>) {
    callback()
      .then((res: Good[]) => {
        setGoods(res);
      })
      .catch(() => setErrorMessage('some error has occured'));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setVisibleGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setVisibleGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setVisibleGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {errorMessage && (errorMessage)}
    </div>
  );
};
