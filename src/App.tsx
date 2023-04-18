import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

enum Filter {
  Default = '',
  All = 'all',
  FiveFirst = 'fiveFirst',
  OnlyRed = 'onlyRed',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loadType, setLoadType] = useState<Filter>(Filter.Default);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setHasError(false);

      try {
        let goodsFromServer: Promise<Good[]> | Good[] = [];

        switch (loadType) {
          case Filter.All:
            goodsFromServer = getAll();
            break;
          case Filter.FiveFirst:
            goodsFromServer = get5First();
            break;
          case Filter.OnlyRed:
            goodsFromServer = getRed();
            break;
          default:
            break;
        }

        const good = await goodsFromServer;

        setGoods(good);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [loadType]);

  function handleGetGoods(type: Filter) {
    setLoadType(type);
  }

  return (
    <div className="App">
      <h1 className="h1">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className={classNames('button',
          { 'is-loading': isLoading })}
        disabled={loadType === Filter.All}
        onClick={() => handleGetGoods(Filter.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className={classNames('button',
          { 'is-loading': isLoading })}
        disabled={loadType === Filter.FiveFirst}
        onClick={() => handleGetGoods(Filter.FiveFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className={classNames('button',
          { 'is-loading': isLoading })}
        disabled={loadType === Filter.OnlyRed}
        onClick={() => handleGetGoods(Filter.OnlyRed)}
      >
        Load red goods
      </button>

      {isLoading
        ? <p>Is Loading...</p>
        : (
          <>
            {hasError && (
              <h1 className="notification is-danger is-light">
                Oops, something went wrong!
              </h1>
            )}

            <GoodsList goods={goods} />
          </>
        )}
    </div>
  );
};
