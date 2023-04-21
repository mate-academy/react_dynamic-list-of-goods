import React, { useState } from 'react';
import './App.scss';
import classNames from 'classnames';
import 'bulma';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum GoodsType {
  Default = 'default',
  All = 'getAll',
  FirstFive = 'firstFive',
  OnlyRed = 'onlyRedColor',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadingError, setHasLoadingError] = useState(false);
  const [currentGoodsType, setCurrentGoodsType] = useState(GoodsType.Default);

  const loadGoods = (
    getGoods: () => Promise<Good[]>,
    goodsType = GoodsType.Default,
  ) => {
    setIsLoading(true);
    setHasLoadingError(false);

    getGoods()
      .then((loadedGoods) => setGoods(loadedGoods))
      .catch(() => setHasLoadingError(true))
      .finally(() => setIsLoading(false));

    setCurrentGoodsType(goodsType);
  };

  const checkIsButtonDisabled = (buttonType: GoodsType) => (
    buttonType === currentGoodsType && !hasLoadingError
  );

  return (
    <div className="App">
      <h1 className="title is-2">Dynamic list of Goods</h1>

      <button
        disabled={checkIsButtonDisabled(GoodsType.All)}
        className={classNames(
          'button',
          'is-link',
          { 'is-loading': isLoading },
        )}
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll, GoodsType.All)}
      >
        Load all goods
      </button>

      <button
        disabled={checkIsButtonDisabled(GoodsType.FirstFive)}
        className={classNames(
          'button',
          'is-link',
          { 'is-loading': isLoading },
        )}
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First, GoodsType.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        disabled={checkIsButtonDisabled(GoodsType.OnlyRed)}
        className={classNames(
          'button',
          'is-link',
          { 'is-loading': isLoading },
        )}
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods, GoodsType.OnlyRed)}
      >
        Load red goods
      </button>

      {!isLoading && !hasLoadingError && (
        <GoodsList goods={goods} />
      )}

      {hasLoadingError && (
        <div className="notification is-danger">
          An error occured when loading data!
        </div>
      )}
    </div>
  );
};
