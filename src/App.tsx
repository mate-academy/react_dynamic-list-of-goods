import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';
import { LoadType } from './types/LoadType';

import { GoodsList } from './components/GoodList';
import { Loader } from './components/Loader';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const [
    isSelectedLoadType,
    setIsSelectedLoadType,
  ] = useState<LoadType>(LoadType.NONE);

  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState('');

  const handleLoadData = useCallback(async (loadCallback) => {
    setIsLoading(true);

    const goodsFromServer: Good[] = await loadCallback();

    try {
      setGoods(goodsFromServer);
      setLoadingError('');
    } catch (error) {
      setLoadingError('Failed to load data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadingComplete = !loadingError && !isLoading;

  const handleButtonClick = (
    loadFunction: () => Promise<Good[]>,
    loadType: LoadType,
  ) => {
    setIsSelectedLoadType(loadType);
    handleLoadData(loadFunction);
  };

  const isButtonActive = (loadType: LoadType) => {
    return isSelectedLoadType === loadType;
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="buttons is-centered">
          <button
            className={classNames(
              'button is-primary is-outlined',
              {
                'is-active': isButtonActive(LoadType.ALL),
              },
            )}
            type="button"
            data-cy="all-button"
            onClick={() => handleButtonClick(getAll, LoadType.ALL)}
            disabled={isButtonActive(LoadType.ALL)}
          >
            Load all goods
          </button>

          <button
            className={classNames(
              'button is-primary is-outlined',
              {
                'is-active': isButtonActive(LoadType.FIRST5),
              },
            )}
            type="button"
            name="first5"
            data-cy="first-five-button"
            onClick={() => {
              setIsSelectedLoadType(LoadType.FIRST5);
              handleLoadData(get5First);
            }}
            disabled={isButtonActive(LoadType.FIRST5)}
          >
            Load 5 first goods
          </button>

          <button
            className={classNames(
              'button is-primary is-outlined',
              {
                'is-active': isButtonActive(LoadType.ONLYRED),
              },
            )}
            type="button"
            name="onlyRed"
            data-cy="red-button"
            onClick={() => {
              setIsSelectedLoadType(LoadType.ONLYRED);
              handleLoadData(getRedGoods);
            }}
            disabled={isButtonActive(LoadType.ONLYRED)}
          >
            Load red goods
          </button>
        </div>

        {loadingError && (
          <p className="error">
            {loadingError}
          </p>
        )}

        {isLoading && <Loader />}

        {loadingComplete && (
          <GoodsList goods={goods} />
        )}
      </div>
    </div>
  );
};
