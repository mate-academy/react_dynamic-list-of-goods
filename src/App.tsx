import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const filteredGoods = (serverGoods: void | Good[]) => {
    if (Array.isArray(serverGoods)) {
      setGoods(serverGoods);

      return;
    }

    throw new Error('not receive goods');
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const typeFilter = (event.target as HTMLButtonElement).dataset.filter;

    switch (typeFilter) {
      case 'all-button':
        getAll()
          .then(filteredGoods)
          // eslint-disable-next-line no-console
          .catch(error => console.error('Error fetching all goods:', error));
        break;
      case 'first-five-button':
        get5First()
          .then(filteredGoods)
          .catch(error =>
            // eslint-disable-next-line no-console
            console.error('Error fetching first five goods:', error),
          );
        break;
      case 'red-button':
        getRed()
          .then(filteredGoods)
          // eslint-disable-next-line no-console
          .catch(error => console.error('Error fetching red goods:', error));
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        data-filter="all-button"
        onClick={handleClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        data-filter="first-five-button"
        onClick={handleClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        data-filter="red-button"
        onClick={handleClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
