import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

type ApiFunction = () => Promise<Good[]>;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadedGoods = useCallback((apiFunction: ApiFunction) => {
    apiFunction()
      .then(goodsFromServer => setGoods(goodsFromServer))
      .finally(() => setIsLoading(true));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadedGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadedGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadedGoods(getRedGoods)}
      >
        Load red goods
      </button>
      {isLoading && <GoodsList goods={goods} />}
    </div>
  );
};
