import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or;
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsState, setGoodsState] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const chooseGoods = (buttonState: string): void => {
    switch (buttonState) {
      case 'All':
        getAll()
          .then(setGoodsState)
          .catch((reason: Error) => setErrorMessage(reason.message));
        break;
      case 'first 5':
        get5First()
          .then(setGoodsState)
          .catch((reason: Error) => setErrorMessage(reason.message));
        break;
      case 'red':
        getRedGoods()
          .then(setGoodsState)
          .catch((reason: Error) => setErrorMessage(reason.message));
        break;
      default:
        setGoodsState([]);
    }
  };

  const handleClick = (buttonType: string) => {
    chooseGoods(buttonType);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick('All')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick('first 5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick('red')}
      >
        Load red goods
      </button>
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <GoodsList goods={goodsState} />
      )}
    </div>
  );
};
