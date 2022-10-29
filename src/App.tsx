import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showGoods = (callback: Promise<Good[]>) => {
    callback.then(shownGoods => setGoods(shownGoods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => showGoods(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => showGoods(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => showGoods(getRedGoods())}
      >
        Load red goods
      </button>

      {
        goods.length > 0
        && <GoodsList goods={goods} />
      }
    </div>
  );
};
