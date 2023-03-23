import React, { useState } from 'react';
import classnames from 'classnames';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

enum GoodsType {
  Default,
  All,
  FirstFive,
  OnlyRed,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [currentGoodsType, setCurrentGoodsType] = useState(GoodsType.Default);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);

  const getLoadHandler = (
    getGoods: () => Promise<Good[]>,
    goodsType = GoodsType.Default,
  ) => {
    return () => {
      if (currentGoodsType !== goodsType) {
        setIsLoading(true);
        setIsLoadingError(false);
        getGoods()
          .then(setGoods)
          .catch(() => setIsLoadingError(true))
          .finally(() => setIsLoading(false));
        setCurrentGoodsType(goodsType);
      }
    };
  };

  return (
    <div className="App ">
      <div className="columns m-3 is-flex is-justify-content-center">
        <div className="column is-half">
          <article className="panel is-link">
            <h1 className="panel-heading has-text-centered">
              Dynamic list of Goods
            </h1>

            <div
              className="
              panel-block
              buttons
              buttons-are-small
              m-0
              is-flex
              is-justify-content-center
              px-6
              pt-5
              pb-2"
            >
              <button
                className={classnames('button', 'is-link', {
                  'is-loading': isLoading && currentGoodsType === GoodsType.All,
                })}
                type="button"
                data-cy="all-button"
                onClick={getLoadHandler(getAll, GoodsType.All)}
              >
                Load all goods
              </button>

              <button
                className={classnames('button', 'is-link', 'mx-4', {
                  'is-loading':
                    isLoading && currentGoodsType === GoodsType.FirstFive,
                })}
                type="button"
                data-cy="first-five-button"
                onClick={getLoadHandler(get5First, GoodsType.FirstFive)}
              >
                Load 5 first goods
              </button>

              <button
                className={classnames('button', 'is-link', {
                  'is-loading':
                    isLoading && currentGoodsType === GoodsType.OnlyRed,
                })}
                type="button"
                data-cy="red-button"
                onClick={getLoadHandler(getRedGoods, GoodsType.OnlyRed)}
              >
                Load red goods
              </button>
            </div>

            {isLoadingError ? (
              <div
                className="
                  block
                  has-background-danger-light
                  is-flex
                  is-justify-content-center
                  is-flex-grow-1
                  px-6
                  py-5"
              >
                <p className="has-text-danger">
                  An error occurred while loading goods!
                </p>
              </div>
            ) : (
              <>{goods.length > 0 && <GoodsList goods={goods} />}</>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};
