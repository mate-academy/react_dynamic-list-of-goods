import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, getFirst5, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const getAllGoods = async () => {
    try {
      const allGoods = await getAll();

      setVisibleGoods(allGoods);
    } catch (error) {
      setHasLoadingError(true);
      throw new Error('No data was found');
    }
  };

  const getFirstFiveGoods = async () => {
    try {
      const firstFiveGoods = await getFirst5();

      setVisibleGoods(firstFiveGoods);
    } catch (error) {
      setHasLoadingError(true);
      throw new Error('No data was found');
    }
  };

  const getAllRedGoods = async () => {
    try {
      const redGoods = await getRedGoods();

      setVisibleGoods(redGoods);
    } catch (error) {
      setHasLoadingError(true);
      throw new Error('No data was found');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={getAllGoods}
          className="App__button App__button-all"
        >
          Load all goods
        </button>
        <button
          type="button"
          data-cy="first-five-button"
          onClick={getFirstFiveGoods}
          className="App__button App__button-five"
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          data-cy="red-button"
          onClick={getAllRedGoods}
          className="App__button App__button-red"
        >
          Load red goods
        </button>
      </div>
      {
        hasLoadingError
          ? (
            <h3>No data was found</h3>
          )
          : (
            <GoodsList
              goods={visibleGoods}
            />
          )
      }
    </div>
  );
};
