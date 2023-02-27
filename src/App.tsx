import React, { useCallback, useState } from 'react';
import 'bulma';
import cn from 'classnames';

import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { Good } from './types/Good';
import { LoadType } from './types/LoadedType';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [loadedType, setLoadedType] = useState(LoadType.NONE);

  const handleLoadClick = useCallback(
    async (fetchGoodsFunc: () => Promise<Good[]>, loadType) => {
      setIsInitialized(false);
      setGoods([]);
      setisLoading(true);
      setErrorMessage('');

      try {
        const loadedGoods = await fetchGoodsFunc();

        setGoods(loadedGoods);
        setIsInitialized(true);
        setLoadedType(loadType);
      } catch (error) {
        setGoods([]);
        setLoadedType(LoadType.NONE);
        setErrorMessage(error.message);
      } finally {
        setisLoading(false);
      }
    },
    [],
  );

  return (
    <div className="App">
      <div className="App__content box">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="App__loadButtons">
          <button
            type="button"
            className={cn(
              'button',
              'is-primary',
              { 'is-outlined': loadedType !== LoadType.ALL },
            )}
            data-cy="all-button"
            onClick={() => handleLoadClick(getAll, LoadType.ALL)}
          >
            Load all goods
          </button>
          <button
            type="button"
            className={cn(
              'button',
              'is-primary',
              { 'is-outlined': loadedType !== LoadType.FIVE },
            )}
            data-cy="first-five-button"
            onClick={() => handleLoadClick(get5First, LoadType.FIVE)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className={cn(
              'button',
              'is-primary',
              { 'is-outlined': loadedType !== LoadType.RED },
            )}
            data-cy="red-button"
            onClick={() => handleLoadClick(getRedGoods, LoadType.RED)}
          >
            Load red goods
          </button>
        </div>

        {errorMessage && <p className="has-text-danger">{errorMessage}</p>}

        {goods.length
          ? <GoodsList goods={goods} />
          : isInitialized && (
            <p className="has-text-danger">There are no goods</p>
          )}

        {isLoading && (
          <img
          // eslint-disable-next-line max-len
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt=""
          />
        )}

      </div>
    </div>
  );
};
