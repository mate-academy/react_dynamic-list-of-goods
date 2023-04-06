import React, { useCallback, useState } from 'react';
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

  const [loadedGoodsGroupText, setLoadedGoodsGroupText] = useState('');

  const handleGoodsLoad = useCallback(
    (getGoodsFromServer: () => Promise<Good[]>) => (
      async (stopButtonLoading: () => void, goodsGroupText: string) => {
        setIsLoading(true);
        setHasLoadingError(false);
        setLoadedGoodsGroupText(goodsGroupText);

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
    ),
    [],
  );

  const isSuccessLoad = !hasLoadingError && !isLoading && isInitialized;

  return (
    <div className="App">
      <div className="section">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-weight-bold">
            Dynamic list of Goods
          </h1>

          <div className="buttons is-centered">
            <LoadingButton
              text="all goods"
              dataCy="all-button"
              onDataLoad={handleGoodsLoad(goodsAPI.getAll)}
            />

            <LoadingButton
              text="5 first goods"
              dataCy="first-five-button"
              onDataLoad={handleGoodsLoad(goodsAPI.get5First)}
            />

            <LoadingButton
              text="red goods"
              dataCy="red-button"
              onDataLoad={handleGoodsLoad(goodsAPI.getRedGoods)}
            />
          </div>

          {hasLoadingError && (
            <article className="message is-danger">
              <div className="message-body">
                {`An error occured when loading ${loadedGoodsGroupText}`}
              </div>
            </article>
          )}

          {isSuccessLoad && !goods.length && (
            <p>
              {`No ${loadedGoodsGroupText} were found`}
            </p>
          )}

          {isSuccessLoad && goods.length > 0
            && (
              <GoodsList goods={goods} />
            )}
        </div>
      </div>
    </div>
  );
};
