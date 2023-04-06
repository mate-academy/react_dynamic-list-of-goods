import React, { useState } from 'react';
import Loader from 'react-loaders';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, getFirst5, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (getData: { (): Promise<Good[]>; }) => {
    setIsLoading(true);
    setVisibleGoods([]);

    try {
      const data = await getData();

      setVisibleGoods(data);
    } catch (error) {
      setHasLoadingError(true);
      throw new Error('No data was found');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={async () => {
            await fetchData(getAll);
          }}
          className="App__button App__button-all"
        >
          Load all goods
        </button>
        <button
          type="button"
          data-cy="first-five-button"
          onClick={async () => {
            await fetchData(getFirst5);
          }}
          className="App__button App__button-five"
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          data-cy="red-button"
          onClick={async () => {
            await fetchData(getRedGoods);
          }}
          className="App__button App__button-red"
        >
          Load red goods
        </button>
      </div>

      {isLoading && (
        <Loader type="ball-pulse" active />
      )}

      {hasLoadingError
        ? (
          <h3>No data was found</h3>
        )
        : (
          <GoodsList
            goods={visibleGoods}
          />
        )}
    </div>
  );
};
