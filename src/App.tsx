import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import GoodsList from './GoodsList';
import { getAll } from './api/goods';
import { get5First } from './api/goods';
import { getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  const get5FirstGoods = () => {
    get5First()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  const getAllRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getAllRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
