import React, { useState } from 'react';
import './App.scss';
import { GoodList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './react-app-env';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const setAllGoods = () => {
    getAll()
      .then(goodsFromServer => setGoods(goodsFromServer));
  };

  const set5FirstGoods = () => {
    get5First()
      .then(goodsFromServer => setGoods(goodsFromServer));
  };

  const setRedGoods = () => {
    getRedGoods()
      .then(goodsFromServer => setGoods(goodsFromServer));
  };

  return (
    <main className="
      box main pb-6
      is-flex
      is-flex-direction-column
      is-align-items-center"
    >
      <h1
        className="title is-3"
      >
        Dynamic list of Goods
      </h1>
      <div className="buttons">
        <button
          className="button is-link is-outlined"
          type="button"
          onClick={setAllGoods}
        >
          Load All goods
        </button>
        <button
          className="button is-success is-outlined"
          type="button"
          onClick={set5FirstGoods}
        >
          Load 5 first goods
        </button>
        <button
          className="button is-danger is-outlined"
          type="button"
          onClick={setRedGoods}
        >
          Load red goods
        </button>
      </div>
      <GoodList goods={goods} />
    </main>
  );
};
