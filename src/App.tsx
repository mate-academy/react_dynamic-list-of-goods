import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = () => {
    getAll()
      .then(setGoods)
      // eslint-disable-next-line no-console
      .catch(error => console.error('Error fetching all goods:', error));
  };

  const handleGet5First = () => {
    get5First()
      .then(setGoods)
      // eslint-disable-next-line no-console
      .catch(error => console.error('Error fetching first 5 goods:', error));
  };

  const handleGetRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      // eslint-disable-next-line no-console
      .catch(error => console.error('Error fetching red goods:', error));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
