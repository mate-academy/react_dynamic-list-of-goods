import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
import 'bulma';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showGoods = async (promise: Promise<Good[]>) => {
    const visibleGoods = await promise;

    setGoods(visibleGoods);
  };

  return (
    <div className="App box">
      <h1>Dynamic list of Goods</h1>
      <div className="buttons">
        <button
          type="button"
          className="button is-primary"
          data-cy="all-button"
          onClick={() => showGoods(getAll())}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button is-link"
          data-cy="first-five-button"
          onClick={() => showGoods(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-danger"
          data-cy="red-button"
          onClick={() => showGoods(getRedGoods())}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
