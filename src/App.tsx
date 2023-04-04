import React, { useState } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.min.css';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import {
  getAll,
  get5First,
  getRedGoods,
  wait,
} from './api/goods';
import { LoadingError } from './components/LoadingError';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingFirstFive, setLoadingFirstFive] = useState(false);
  const [loadingRed, setLoadingRed] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleAllGoods = async () => {
    setLoading(true);
    setHasError(false);
    await wait(1000);
    setLoading(false);

    getAll()
      .then(setGoods)
      .catch(() => {
        setLoading(false);
        setHasError(true);
      });
  };

  const handle5FirstGoods = async () => {
    setLoadingFirstFive(true);
    setHasError(false);
    await wait(1000);
    setLoadingFirstFive(false);

    get5First()
      .then(setGoods)
      .catch(() => {
        setLoadingFirstFive(false);
        setHasError(true);
      });
  };

  const handleRedGoods = async () => {
    setLoadingRed(true);
    setHasError(false);
    await wait(1000);
    setLoadingRed(false);

    getRedGoods()
      .then(setGoods)
      .catch(() => {
        setLoadingRed(false);
        setHasError(true);
      });
  };

  return (
    <div className="App">
      <h1 className="title is-1">
        Dynamic list of Goods
      </h1>

      <button
        type="button"
        data-cy="all-button"
        className={classNames(
          'button', 'is-link', 'is-focused', { 'is-loading': loading },
        )}
        onClick={handleAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className={classNames(
          'button', 'is-link', 'is-focused', { 'is-loading': loadingFirstFive },
        )}
        onClick={handle5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className={classNames(
          'button', 'is-link', 'is-focused', { 'is-loading': loadingRed },
        )}
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      {hasError && <LoadingError />}

      <GoodsList goods={goods} />
    </div>
  );
};
