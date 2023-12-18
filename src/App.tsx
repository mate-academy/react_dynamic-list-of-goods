import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // const onClick = (filter: string) => async () => {
  //   let currentGoodsPromise: Promise<Good[]>;

  //   switch (filter) {
  //     case 'all':
  //       currentGoodsPromise = getAll();
  //       break;
  //     case 'firstFive':
  //       currentGoodsPromise = get5First();
  //       break;
  //     case 'red':
  //       currentGoodsPromise = getRedGoods();
  //       break;
  //     default:
  //       break;
  //   }

  //   const currentGoods = await currentGoodsPromise;

  //   setGoods(currentGoods);
  // };

  const onAllClick = () => {
    setErrorMessage(null);
    getAll()
      .then(setGoods)
      .catch((error) => setErrorMessage(error.message));
  };

  const on5FirstClick = () => {
    setErrorMessage(null);
    get5First()
      .then(setGoods)
      .catch((error) => setErrorMessage(error.message));
  };

  const onRedClick = () => {
    setErrorMessage(null);
    getRedGoods()
      .then(setGoods)
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={onAllClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={on5FirstClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={onRedClick}
      >
        Load red goods
      </button>

      {errorMessage && <p>{errorMessage}</p>}

      {goods && <GoodsList goods={goods} />}
    </div>
  );
};
