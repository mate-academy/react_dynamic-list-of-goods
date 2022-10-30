import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function loadGoods(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget.dataset.cy;

    switch (button) {
      case 'all-button':
        setGoods(await getAll());
        break;

      case 'first-five-button':
        setGoods(await get5First());
        break;

      case 'red-button':
        setGoods(await getRedGoods());
        break;

      default:
        break;
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
