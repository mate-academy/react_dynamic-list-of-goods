import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';

import { GoodsList } from './components/GoodsList/GoodsList';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Loader } from './components/Loader/Loader';
import { GoodsType, LoadError } from './types';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);
  const [currentGoodsType, setCurrentGoodsType] = useState(GoodsType.Default);

  const loadGoods = (
    getGoods: () => Promise<Good[]>,
    goodsType = GoodsType.Default,
  ) => {
    setIsLoading(true);
    getGoods()
      .then((loadedGoods) => setGoods(loadedGoods))
      .catch(() => setIsLoadingError(true))
      .finally(() => setIsLoading(false));

    setIsLoadingError(false);

    if (goodsType !== currentGoodsType) {
      setCurrentGoodsType(goodsType);
    }
  };

  return (
    <div className="App">
      <div className="App-content">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="button-container">
          <button
            disabled={isLoading}
            className="button is-link"
            type="button"
            data-cy="all-button"
            onClick={() => loadGoods(getAll, GoodsType.All)}
          >
            Load all goods
          </button>

          <button
            disabled={isLoading}
            type="button"
            className="button is-link"
            data-cy="first-five-button"
            onClick={() => loadGoods(get5First, GoodsType.FirstFive)}
          >
            Load 5 first goods
          </button>

          <button
            disabled={isLoading}
            type="button"
            className="button is-link"
            data-cy="red-button"
            onClick={() => loadGoods(getRedGoods, GoodsType.OnlyRed)}
          >
            Load red goods
          </button>
        </div>

        {isLoading
          ? <Loader />
          : (
            <>
              {isLoadingError
                ? <ErrorMessage text={LoadError.LoadingError} />
                : <GoodsList goods={goods} />}
            </>
          )}
      </div>
    </div>
  );
};
