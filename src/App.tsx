import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { Loader } from './Loader';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setError] = useState<string | null>(null);

  const handleLoadGoods = async (getGood: () => Promise<Good[]>) => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const goodsFromServer = await getGood();

      setGoods(goodsFromServer);
    } catch (error) {
      setError('An error occurred while loading the goods.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App container-sm mt-4">
      <h1 className="text-center mb-4">Dynamic list of Goods</h1>

      <div className="d-flex justify-content-center mb-4">
        <button
          type="button"
          className="btn btn-dark"
          data-cy="all-button"
          onClick={() => handleLoadGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="btn btn-dark mx-3"
          data-cy="first-five-button"
          onClick={() => handleLoadGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="btn btn-dark"
          data-cy="red-button"
          onClick={() => handleLoadGoods(getRedGoods)}
        >
          Load red goods
        </button>
      </div>

      {loadingError
        && (
          <div className="alert alert-danger" role="alert">
            {`Error: ${loadingError}`}
          </div>
        )}

      {isLoading && <Loader />}

      {!isLoading && !loadingError && <GoodsList goods={goods} />}
    </div>
  );
};
