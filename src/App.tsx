import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAllGoods = () => {
    return getAll()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch goods:', error);

        return [];
      });
  };

  const handleLoad5First = () => {
    return get5First()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch the first 5 goods:', error);

        return [];
      });
  };

  const handleLoadRedGoods = () => {
    return getRedGoods()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch red goods:', error);

        return [];
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
