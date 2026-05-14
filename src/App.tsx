import { useCallback, useState } from 'react';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';
import './App.scss';

export const App = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadGoods = useCallback((apiFunction: () => Promise<Good[]>) => {
    setErrorMessage(null);
    apiFunction()
      .then(setVisibleGoods)
      .catch((error: Error) => setErrorMessage(error.message));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <GoodsList goods={visibleGoods} />
      )}
    </div>
  );
};
