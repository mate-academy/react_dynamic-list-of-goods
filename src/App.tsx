import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const filteredGoods = (serverGoods: Good[]) => setGoods(serverGoods);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const typeFilter = (event.target as HTMLButtonElement).dataset.filter;

    switch (typeFilter) {
      case 'all-button':
        getAll().then(filteredGoods);
        break;
      case 'first-five-button':
        get5First().then(filteredGoods);
        break;
      case 'red-button':
        getRed().then(filteredGoods);
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
