import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>([]);

  const loadAll = () => {
    getAll()
      .then(goodsFromServer => setGoods(goodsFromServer));
  };

  const load5First = () => {
    get5First()
      .then(goodsFromServer => setGoods(goodsFromServer));
  };

  const loadRed = () => {
    getRedGoods()
      .then(goodsFromServer => setGoods(goodsFromServer));
  };

  return (
    <div className="App">
      <h1 className="content is-large">Dynamic list of Goods</h1>

      <button
        className="button is-dark"
        type="button"
        data-cy="all-button"
        onClick={loadAll}
      >
        Load all goods
      </button>

      <button
        className="button is-dark"
        type="button"
        data-cy="first-five-button"
        onClick={load5First}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-dark"
        type="button"
        data-cy="red-button"
        onClick={loadRed}
      >
        Load red goods
      </button>
      {goods && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
