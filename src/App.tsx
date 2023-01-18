import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import 'bulma';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App panel">
      <h1 className="block panel-heading">Dynamic list of Goods</h1>

      <div className="buttons panel-tabs">
        <button
          className="button is-light"
          type="button"
          data-cy="all-button"
          onClick={() => getAll().then(data => setGoods(data))}
        >
          Load all goods
        </button>

        <button
          className="button is-light"
          type="button"
          data-cy="first-five-button"
          onClick={() => get5First().then(data => setGoods(data))}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-light"
          type="button"
          data-cy="red-button"
          onClick={() => {
            getRedGoods().then(data => setGoods(data));
          }}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
