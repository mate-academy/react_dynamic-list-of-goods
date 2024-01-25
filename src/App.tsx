import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleButtonClick = (buttonType: string) => {
    switch (buttonType) {
      case 'all-button':
        getAll().then(goods => setVisibleGoods(goods));
        break;
      case 'first-five-button':
        get5First().then(goods => setVisibleGoods(goods));
        break;
      case 'red-button':
        getRedGoods().then(goods => setVisibleGoods(goods));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleButtonClick('all-button')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleButtonClick('first-five-button')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleButtonClick('red-button')}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
