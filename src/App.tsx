import React, { useState } from 'react';
import './App.scss';
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

  const handleThanAndCatch = (buttonString: Loaded) => {
    return () => {
      const getterFunction = (() => {
        switch (buttonString) {
          case 'all':
            return getAll;
          case 'five':
            return get5First;
          case 'red':
            return getRedGoods;
          default:
            return getAll;
        }
      })();

      setLoading(true);
      setButtonClicked(buttonString);

      getterFunction()
        .then((goods) => {
          setGoodsToShow([...goods]);
          setLoadedState(buttonString);
          reset();
        })
        .catch(() => {
          setLoadingError(true);
          reset();
        });
    };
  };

  const loadAllGoods = handleThanAndCatch('all');

  const load5FirstGoods = handleThanAndCatch('five');

  const loadRedGoods = handleThanAndCatch('red');

  return (
    <div className="App is-family-monospace">
      <h1 className="title m-6">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
        disabled={loadedState === 'all' || loadingError}
        className={
          `button is-warning ${buttonClicked === 'all' ? 'is-loading' : ''}`
        }
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
        disabled={loadedState === 'five' || loadingError}
        className={
          `button is-success ${buttonClicked === 'five' ? 'is-loading' : ''}`
        }
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
        disabled={loadedState === 'red' || loadingError}
        className={
          `button is-danger ${buttonClicked === 'red' ? 'is-loading' : ''}`
        }
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
