import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';

import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const throwError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  const getAllGoods = () => {
    setIsLoading(true);
    getAll()
      .then(result => {
        setGoods(result);
        setIsLoading(false);
      })
      .catch(throwError);
  };

  const get5Goods = () => {
    get5First()
      .then(result => setGoods(result))
      .catch(throwError);
  };

  const getOnlyRedGoods = () => {
    getRedGoods()
      .then(result => setGoods(result))
      .catch(throwError);
  };

  if (isError) {
    return (
      <p className="notification is-danger">
        Oops! Something went wrong!
      </p>
    );
  }

  return (
    <div className="App">
      <h1 className="title is-3">Dynamic list of Goods</h1>

      <button
        type="button"
        className={isLoading
          ? ('button is-primary is-loading')
          : ('button is-primary')}
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        className="button is-warning"
        data-cy="first-five-button"
        onClick={get5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="button is-danger"
        data-cy="red-button"
        onClick={getOnlyRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
