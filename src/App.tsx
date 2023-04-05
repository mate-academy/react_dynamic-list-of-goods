import React, { useCallback, useState } from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

enum Sort {
  Default = '',
  All = 'all',
  FiveFirst = 'fiveFirst',
  OnlyRed = 'onlyRed',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isChoosedType, setIsChoosedType] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleGetGoods = useCallback(async (loadType: string) => {
    let goodsFromServer: Good[] = [];

    setIsChoosedType(true);

    try {
      switch (loadType) {
        case Sort.All:
          goodsFromServer = await getAll();
          break;
        case Sort.FiveFirst:
          goodsFromServer = await get5First();
          break;
        case Sort.OnlyRed:
          goodsFromServer = await getRed();
          break;
        default:
          goodsFromServer = [];
          break;
      }

      setGoods(goodsFromServer);
    } catch {
      setHasError(true);
    } finally {
      setIsChoosedType(false);
    }
  }, []);

  return (
    <div className="App">
      <h1 className="h1">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className={classNames('button',
          { 'is-loading': isChoosedType })}
        onClick={() => handleGetGoods('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className={classNames('button',
          { 'is-loading': isChoosedType })}
        onClick={() => handleGetGoods('fiveFirst')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className={classNames('button',
          { 'is-loading': isChoosedType })}
        onClick={() => handleGetGoods('onlyRed')}
      >
        Load red goods
      </button>

      {hasError
        ? (
          <h1 className="notification is-danger is-light">
            Oops, something went wrong!
          </h1>
        ) : (
          <GoodsList goods={goods} />
        )}
    </div>
  );
};
