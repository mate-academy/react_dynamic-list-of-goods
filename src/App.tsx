import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  // 'Saw this method when did studen review'
  // const handleButtonClick = async (callback: Promise<Good[]>) => {
  //   setGoods(await callback);
  // };

  return (
    <div className="App">
      <h1 className="title is-1">Dynamic list of Goods</h1>
      <div className="buttons is-centered">
        <button
          type="button"
          className="button is-info is-rounded is-light"
          data-cy="all-button"
          onClick={() => (getAll().then(good => setGoods(good)))}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button is-link is-rounded is-light"
          data-cy="first-five-button"
          onClick={() => (get5First().then(good => setGoods(good)))}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-danger is-rounded is-light"
          data-cy="red-button"
          onClick={() => (getRedGoods().then(good => setGoods(good)))}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
