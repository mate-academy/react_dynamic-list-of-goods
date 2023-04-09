import React, { useState } from 'react';
import './App.scss';
import classNames from 'classnames';
import 'bulma';
import '@fortawesome/fontawesome';
import { GoodsList } from './components/GoodsList';
import { Loader } from './components/Loader';

import {
  getAll,
  get5First,
  getRedGoods,
} from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsToShow, setGoodsToShow] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  type Loaded = 'all' | 'five' | 'red' | 'none';

  const [buttonClicked, setButtonClicked] = useState('none');
  const [loadedState, setLoadedState] = useState<Loaded>('none');

  const reset = () => {
    setLoading(false);
    setButtonClicked('none');
  };

  const loadAllGoods = () => {
    setLoading(true);
    setButtonClicked('all');

    getAll()
      .then((goods) => {
        setGoodsToShow([...goods]);
        setLoadedState('all');
        reset();
      })
      .catch(() => {
        setLoadingError(true);
        reset();
      });
  };

  const loadFiveFirstGoods = () => {
    setLoading(true);
    setButtonClicked('five');

    return get5First()
      .then((goods) => {
        setGoodsToShow([...goods]);
        setLoadedState('five');
        reset();
      })
      .catch(() => {
        setLoadingError(true);
        reset();
      });
  };

  const loadRedGoods = () => {
    setLoading(true);
    setButtonClicked('red');

    return getRedGoods()
      .then((goods) => {
        setGoodsToShow([...goods]);
        setLoadedState('red');
        reset();
      })
      .catch(() => {
        setLoadingError(true);
        reset();
      });
  };

  return (
    <div className="App is-family-monospace">
      <h1 className="title m-6">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
        disabled={loadedState === 'all' || loadingError}
        className={classNames(
          'button is-warning m-1',
          { 'is-loading': buttonClicked === 'all' },
        )}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFiveFirstGoods}
        disabled={loadedState === 'five' || loadingError}
        className={classNames(
          'button is-success m-1',
          { 'is-loading': buttonClicked === 'five' },
        )}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
        disabled={loadedState === 'red' || loadingError}
        className={classNames(
          'button is-danger m-1',
          { 'is-loading': buttonClicked === 'red' },
        )}
      >
        Load red goods
      </button>

      {loading
        ? <Loader />
        : (
          <GoodsList
            goods={goodsToShow}
            loadingError={loadingError}
            setLoadingError={setLoadingError}
          />
        )}
    </div>
  );
};
