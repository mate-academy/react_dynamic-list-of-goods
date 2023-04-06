import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Loader } from './components/Loader';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback((buttonName: string) => {
    setIsLoading(true);

    let promise: Promise<Good[]>;

    switch (buttonName) {
      case 'all-button':
        promise = getAll();
        break;

      case 'first-five-button':
        promise = get5First();
        break;

      case 'red-button':
        promise = getRedGoods();
        break;

      default:
        promise = Promise.reject(new Error('Unexpected case in switch'));
        break;
    }

    promise
      .then(setGoods)
      .catch(err => window.console.warn(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleClick('all-button');
        }}
        disabled={isLoading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleClick('first-five-button');
        }}
        disabled={isLoading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleClick('red-button');
        }}
        disabled={isLoading}
      >
        Load red goods
      </button>

      {isLoading
        ? (<Loader />)
        : (<GoodsList goods={goods} />)}
    </div>
  );
};
