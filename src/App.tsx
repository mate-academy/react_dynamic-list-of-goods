import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';

import { GoodsList } from './components/GoodsList/GoodsList';
import { LoadingError } from './components/LoadingError/LoadingError';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good, GoodsType, LoadError } from './types/Good';
import { Loader } from './components/Loader/Loader';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [currentGoodsType, setCurrentGoodsType] = useState(GoodsType.Default);

  const loadGoods = (
    getGoods: () => Promise<Good[]>,
    goodsType = GoodsType.Default,
  ) => {
    if (goodsType === currentGoodsType) {
      return;
    }

    setLoading(true);
    getGoods()
      .then((loadedGoods) => setGoods(loadedGoods))
      .catch(() => setLoadingError(true))
      .finally(() => setLoading(false));

    setCurrentGoodsType(goodsType);
  };

  return (
    <div className="App">
      <div className="App-content">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="button-container">
          <button
            disabled={loading}
            className="button is-link"
            type="button"
            data-cy="all-button"
            onClick={() => loadGoods(getAll, GoodsType.All)}
          >
            Load all goods
          </button>

          <button
            disabled={loading}
            type="button"
            className="button is-link"
            data-cy="first-five-button"
            onClick={() => loadGoods(get5First, GoodsType.FirstFive)}
          >
            Load 5 first goods
          </button>

          <button
            disabled={loading}
            type="button"
            className="button is-link"
            data-cy="red-button"
            onClick={() => loadGoods(getRedGoods, GoodsType.OnlyRed)}
          >
            Load red goods
          </button>
        </div>

        {!loading
          ? <GoodsList goods={goods} />
          : <Loader />}

        {loadingError && <LoadingError text={LoadError.LoadingError} />}
      </div>
    </div>
  );
};
