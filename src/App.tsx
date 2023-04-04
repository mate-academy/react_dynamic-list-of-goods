import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';
import { LoadType } from './types/LoadType';

import { GoodsList } from './components/GoodList';
import { Loader } from './components/GoodList/Loader';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const [
    isSelectedLoadType,
    setIsSelectedLoadType,
  ] = useState<LoadType | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState('');

  // console.log('loadingError:', loadingError);

  const handleLoadData = useCallback(async (loadType: LoadType) => {
    setIsLoading(true);

    setIsSelectedLoadType(loadType);

    let goodsFromServer: Good[] = [];

    try {
      switch (loadType) {
        case LoadType.FIRST5:
          goodsFromServer = await get5First();
          break;

        case LoadType.ONLYRED:
          goodsFromServer = await getRedGoods();
          break;

        default:
          goodsFromServer = await getAll();
      }

      setGoods(goodsFromServer);
      setLoadingError('');
    } catch (error) {
      setLoadingError('Failed to load data. Please try again later.');

      setIsLoading(false);

      throw new Error(`Something go wrong, the error is - ${error}`);
    }

    setIsLoading(false);
  }, []);

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

        {!loadingError && !isLoading && <GoodsList goods={goods} />}
      </div>
    </div>
  );
};
