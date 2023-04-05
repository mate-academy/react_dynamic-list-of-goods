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
  const [loading, setLoading] = useState(false);
  const [hasLoadingError, setHasLoadingError] = useState(false);
  const [currentGoodsType, setcurrentGoodsType] = useState(GoodsType.Default);

  const loadGoods = (
    getGoods: () => Promise<Good[]>,
    goodsType = GoodsType.Default,
  ) => {
    if (goodsType === currentGoodsType) {
      return;
    }

    setLoading(true);
    setHasLoadingError(false);

    getGoods()
      .then((loadedGoods) => setGoods(loadedGoods))
      .catch(() => setHasLoadingError(true))
      .finally(() => setLoading(false));

    setcurrentGoodsType(goodsType);
  };

  return (
    <div className="App">
      <h1 className="title is-2">Dynamic list of Goods</h1>

      <button
        disabled={loading}
        className={classNames(
          'button',
          'is-link',
          { 'is-loading': loading },
        )}
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll, GoodsType.All)}
      >
        Load all goods
      </button>

      <button
        disabled={loading}
        className={classNames(
          'button',
          'is-link',
          { 'is-loading': loading },
        )}
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First, GoodsType.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        disabled={loading}
        className={classNames(
          'button',
          'is-link',
          { 'is-loading': loading },
        )}
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods, GoodsType.OnlyRed)}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />

      {hasLoadingError && (
        <div className="notification is-danger">
          An error occured when loading data!
        </div>
      )}
    </div>
  );
};
