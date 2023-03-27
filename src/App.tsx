import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { ButtonsOfGoods } from './types/ButtonsOfGoods';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[] | null>(null);

  async function handleGoods(event: ButtonsOfGoods) {
    switch (event) {
      case 'all-button':
        getAll()
          .then((v) => setVisibleGoods(v));
        break;

      case 'first-five-button':
        await get5First()
          .then((v) => setVisibleGoods(v));
        break;

      case 'red-button':
        await getRedGoods()
          .then((v) => setVisibleGoods(v));
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
        onClick={() => handleGoods('all-button')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoods('first-five-button')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoods('red-button')}
      >
        Load red goods
      </button>

      {visibleGoods && (
        <GoodsList goods={visibleGoods} />
      )}
    </div>
  );
};
