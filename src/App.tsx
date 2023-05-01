import React, { useCallback, useState } from 'react';
import Loader from 'react-loaders';
import './App.scss';
import { isEqual } from 'lodash';
import { GoodsList } from './GoodsList';

import { getAll, getFirst5, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = useCallback(async (getData: () => Promise<Good[]>) => {
    setIsLoading(true);

    try {
      const fetchedData = await getData();

      if (!isEqual(visibleGoods, fetchedData)) {
        setVisibleGoods(fetchedData);
      }
    } catch (error) {
      setErrorMessage('Failed to fetch data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [visibleGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => fetchData(getAll)}
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

      {errorMessage
        ? (
          <h3>{errorMessage}</h3>
        )
        : (
          <GoodsList
            goods={visibleGoods}
          />
        )}
    </div>
  );
};
