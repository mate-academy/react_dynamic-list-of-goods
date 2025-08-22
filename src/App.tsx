import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() =>
          goodsAPI
            .getAll()
            .then(setGoods)
            .catch(error => {
              /* eslint-disable no-console */
              console.error('Error loading all goods:', error);
              alert('Failed to load goods. Please try again later.');
              /* eslint-disable no-console */
            })
        }
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() =>
          goodsAPI
            .get5First()
            .then(setGoods)
            .catch(error => {
              /* eslint-disable no-console */
              console.error('Error loading first five goods:', error);
              alert('Failed to load first five goods. Please try again later.');
              /* eslint-disable no-console */
            })
        }
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() =>
          goodsAPI
            .getRedGoods()
            .then(setGoods)
            .catch(error => {
              /* eslint-disable no-console */
              console.error('Error loading red goods:', error);
              alert('Failed to load red goods. Please try again later.');
              /* eslint-disable no-console */
            })
        }
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
