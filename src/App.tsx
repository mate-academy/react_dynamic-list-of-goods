import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Loader } from './components/Loader';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoodsLoad = useCallback(
    (loaderFunction: () => Promise<Good[]>) => {
      setHasError(false);
      setIsLoading(true);

      loaderFunction()
        .then(setGoods)
        .catch((err: Error) => {
          setErrorMessage(err.message);
          setHasError(true);
        })
        .finally(() => setIsLoading(false));
    }, [],
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleGoodsLoad(getAll);
        }}
        disabled={isLoading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleGoodsLoad(get5First);
        }}
        disabled={isLoading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleGoodsLoad(getRedGoods);
        }}
        disabled={isLoading}
      >
        Load red goods
      </button>

      {isLoading && !hasError
        ? (<Loader />)
        : (<GoodsList goods={goods} />)}
      {hasError && (<p className="error">{errorMessage}</p>)}
    </div>
  );
};
