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
  const [dataLoadedAll, setDataLoadedAll] = useState(false);
  const [dataLoadedFirst5, setDataLoadedFirst5] = useState(false);
  const [dataLoadedOnlyRed, setDataLoadedOnlyRed] = useState(false);
  const [loadingError, setLoadingError] = useState('');

  const handleLoadData = useCallback(async (loadType: LoadType) => {
    setIsLoading(true);

    setIsSelectedLoadType(loadType);

    let goodsFromServer: Good[] = [];

    try {
      switch (loadType) {
        case LoadType.FIRST5:
          goodsFromServer = await get5First();

          setDataLoadedFirst5(true);
          setDataLoadedOnlyRed(false);
          setDataLoadedAll(false);

          break;

        case LoadType.ONLYRED:
          goodsFromServer = await getRedGoods();

          setDataLoadedOnlyRed(true);
          setDataLoadedFirst5(false);
          setDataLoadedAll(false);

          break;

        default:
          goodsFromServer = await getAll();

          setDataLoadedAll(true);
          setDataLoadedOnlyRed(false);
          setDataLoadedFirst5(false);

          break;
      }

      setGoods(goodsFromServer);
      setLoadingError('');
    } catch (error) {
      setLoadingError('Failed to load data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadingComplete = !loadingError && !isLoading;

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="buttons is-centered">
          <button
            className={classNames(
              'button is-primary is-outlined',
              {
                'is-active': isSelectedLoadType === LoadType.ALL,
              },
            )}
            type="button"
            data-cy="all-button"
            onClick={() => handleLoadData(LoadType.ALL)}
            disabled={dataLoadedAll}
          >
            Load all goods
          </button>

          <button
            className={classNames(
              'button is-primary is-outlined',
              {
                'is-active': isSelectedLoadType === LoadType.FIRST5,
              },
            )}
            type="button"
            data-cy="first-five-button"
            onClick={() => handleLoadData(LoadType.FIRST5)}
            disabled={dataLoadedFirst5}
          >
            Load 5 first goods
          </button>

          <button
            className={classNames(
              'button is-primary is-outlined',
              {
                'is-active': isSelectedLoadType === LoadType.ONLYRED,
              },
            )}
            type="button"
            data-cy="red-button"
            onClick={() => handleLoadData(LoadType.ONLYRED)}
            disabled={dataLoadedOnlyRed}
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
