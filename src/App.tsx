import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAllGoods, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [apiError, setApiError] = useState(false);

  const handleAPIError = useCallback((receivedPromise: Promise<Good[]>) => {
    receivedPromise
      .then(goodsFromServer => {
        setApiError(false);

        return setGoods(goodsFromServer);
      })
      .catch(() => setApiError(true));
  }, []);

  const handleLoadAllGoods = useCallback(() => {
    const goodsPromise = getAllGoods();

    handleAPIError(goodsPromise);
  }, [handleAPIError]);

  const handleLoad5Goods = useCallback(() => {
    const goodsPromise = get5First();

    handleAPIError(goodsPromise);
  }, [handleAPIError]);

  const handleLoadRedGoods = useCallback(() => {
    const goodsPromise = getRedGoods();

    handleAPIError(goodsPromise);
  }, [handleAPIError]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5Goods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      {goods.length > 0 && !apiError && <GoodsList goods={goods} />}

      {apiError && <p>API error couldn&apos;t get Data</p>}
    </div>
  );
};
