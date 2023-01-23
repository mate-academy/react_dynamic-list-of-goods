import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import 'bulma';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showGoods = (visibleGoods: Promise<Good[]>) => {
    visibleGoods.then(setGoods);
  };

  return (
    <div className="App panel">
      <h1 className="block panel-heading">Dynamic list of Goods</h1>

      <div className="buttons panel-tabs">
        <button
          className="button is-light"
          type="button"
          data-cy="all-button"
          onClick={() => showGoods(getAll())}
        >
          Load all goods
        </button>

        <button
          className="button is-light"
          type="button"
          data-cy="first-five-button"
          onClick={() => showGoods(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-light"
          type="button"
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
