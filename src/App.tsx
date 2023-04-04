import React, { useState } from 'react';
// import classNames from 'classnames';
import './App.scss';
import 'bulma';

import { LoadingButton } from './components/LoadingButton';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadingError, setHasLoadingError] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const handleGoodsLoad = (getGoodsFromServer: () => Promise<Good[]>) => (
    async (stopButtonLoading: () => void) => {
      setIsLoading(true);

      try {
        const goodsFromServer = await getGoodsFromServer();

        setGoods(goodsFromServer);
        setIsInitialized(true);
      } catch {
        setHasLoadingError(true);
      }

      setIsLoading(false);
      stopButtonLoading();
    }
  );

  return (
    <div className="App">
      <div className="section">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-weight-bold">
            Dynamic list of Goods
          </h1>
          <div className="buttons is-centered">
            <LoadingButton
              text="Load all goods"
              className="button has-text-weight-medium has-text-black"
              data-cy="all-button"
              onDataLoad={handleGoodsLoad(goodsAPI.getAll)}
            />
            <LoadingButton
              text="Load 5 first goods"
              className="button has-text-weight-medium has-text-black"
              data-cy="first-five-button"
              onDataLoad={handleGoodsLoad(goodsAPI.get5First)}
            />
            <LoadingButton
              text="Load red goods"
              className="button has-text-weight-medium has-text-black"
              data-cy="red-button"
              onDataLoad={handleGoodsLoad(goodsAPI.get5First)}
            />
          </div>

          {hasLoadingError && (
            <article className="message is-danger">
              <div className="message-body">
                An error occured when loading goods
              </div>
            </article>
          )}

          {!hasLoadingError && !isLoading && isInitialized && !goods.length && (
            <p>
              No goods were found
            </p>
          )}

          {!hasLoadingError && !isLoading && isInitialized
            && Boolean(goods.length)
            && (
              <GoodsList goods={goods} />
            )}
        </div>
      </div>
    </div>
  );
};
