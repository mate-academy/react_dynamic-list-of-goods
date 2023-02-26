import React, { useState } from 'react';
import './App.scss';
import './Reset.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = (loadedGoods: Promise<Good[]>) => (
    loadedGoods
      .then(setGoods)
  );

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button
          type="button"
          data-cy="all-button"
          className="App__button App__button--all"
          onClick={() => getGoods(getAll())}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          className="App__button App__button--five"
          onClick={() => getGoods(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          className="App__button App__button--red"
          onClick={() => getGoods(getRedGoods())}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
