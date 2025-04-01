import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadAllGoods = () => {
    getAll()
      .then(goods => {
        setAllGoods(goods);
        setIsLoaded(true);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load all goods:', error);
        alert('Failed to load goods. Please try again later.');
      });
  };

  const loadFiveFirstGoods = () => {
    get5First()
      .then(goods => {
        setAllGoods(goods);
        setIsLoaded(true);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load all goods:', error);
        alert('Failed to load goods. Please try again later.');
      });
  };

  const loadRedGoods = () => {
    getRedGoods()
      .then(goods => {
        setAllGoods(goods);
        setIsLoaded(true);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to load all goods:', error);
        alert('Failed to load goods. Please try again later.');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => loadAllGoods()}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadFiveFirstGoods()}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => loadRedGoods()}>
        Load red goods
      </button>

      {isLoaded && <GoodsList goods={allGoods} />}
    </div>
  );
};
