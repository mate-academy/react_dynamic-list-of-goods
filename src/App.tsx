import classnames from 'classnames';
import React, { useCallback, useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

enum ListType {
  None = 'none',
  All = 'all',
  First5 = 'first5',
  Red = 'Red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [currentListType, setCurrentListType] = useState(ListType.None);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleGoodsLoad = useCallback(
    (
      getGoods: () => Promise<Good[]>,
      listType: ListType,
    ) => {
      setIsLoading(true);
      setIsError(false);

      getGoods()
        .then(setGoods)
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));

      setCurrentListType(listType);
    }, [currentListType],
  );

  return (
    <div className="App">

      <div className="panel is-primary is-flex is-flex-direction-column">
        <h1
          className="panel-heading has-text-centered"
        >
          Dynamic list of Goods
        </h1>

        <p className="panel-tabs p-2 has-background-primary">
          <button
            type="button"
            className={classnames('button is-light is-outlined mr-5', {
              'is-loading': isLoading,
            })}
            data-cy="all-button"
            onClick={() => handleGoodsLoad(getAll, ListType.All)}
            disabled={isLoading || currentListType === ListType.All}
          >
            Load all goods
          </button>

          <button
            type="button"
            className={classnames('button is-light is-outlined mr-5', {
              'is-loading': isLoading,
            })}
            data-cy="first-five-button"
            onClick={() => handleGoodsLoad(get5First, ListType.First5)}
            disabled={isLoading || currentListType === ListType.First5}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className={classnames('button is-light is-outlined', {
              'is-loading': isLoading,
            })}
            data-cy="red-button"
            onClick={() => handleGoodsLoad(getRedGoods, ListType.Red)}
            disabled={isLoading || currentListType === ListType.Red}
          >
            Load red goods
          </button>
        </p>
      </div>

      {isLoading
        ? <p>List is loading...</p>
        : (
          <>
            {isError && <p>!!!Loading Error!!!</p>}

            {!isError && <GoodsList goods={goods} />}
          </>
        )}
    </div>
  );
};
