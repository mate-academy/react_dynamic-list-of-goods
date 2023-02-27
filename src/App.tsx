import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState<boolean>(false);

  const dataFromServer = async (data: () => Promise<Good[]>) => {
    try {
      setHasLoadingError(false);
      const goodsFromServer = await data();

      setGoods(goodsFromServer);
    } catch (error) {
      setHasLoadingError(true);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => dataFromServer(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => dataFromServer(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => dataFromServer(getRedGoods)}
      >
        Load red goods
      </button>

      {goods.length > 0 && <GoodsList goods={goods} />}
      {hasLoadingError && 'An error occurred when loading data'}
    </div>
  );
};
