import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);

  function onselect(value: string) {
    switch (value) {
      case 'firstFive': {
        get5First().then(setGoods);
        break;
      }

      case 'onlyRed': {
        getRed().then(setGoods);
        break;
      }

      default: {
        getAll().then(setGoods);
      }
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => onselect('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => onselect('firstFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => onselect('onlyRed')}
      >
        Load red goods
      </button>

      {goods !== null && <GoodsList goods={goods} />}
    </div>
  );
};
