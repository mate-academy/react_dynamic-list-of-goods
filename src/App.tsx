import { FC, useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadGoods = useCallback((apiFunction: () => Promise<Good[]>) => {
    setIsLoading(true);
    apiFunction()
      .then(goodsFromServer => setGoods(goodsFromServer))
      .catch(() => setHasError(true));
    setIsLoading(false);
  }, []);

  return (
    <div className="App box">
      <h1 className="title is-3">Dynamic list of Goods</h1>

      <button
        className="button is-primary mr-2"
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        className="button is-info mr-2"
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-danger mr-2 mb-6"
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {hasError
        ? (<div>Error</div>)
        : (<GoodsList goods={goods} />)}

      {isLoading && (<div>Loading...</div>)}
    </div>
  );
};
