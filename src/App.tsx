import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll()
      .then(listOfGoods => {
        setGoods(listOfGoods);
      });
  };

  const load5firstGoods = () => {
    getAll()
      .then((listOfGoods) => {
        listOfGoods.sort((a, b) => a.name.localeCompare(b.name));

        const first5Goods = listOfGoods.slice(0, 5);

        return first5Goods;
      })
      .then(listOfGoods => setGoods(listOfGoods));
  };

  const loadRedGoods = () => {
    getRedGoods()
      .then(listOfGoods => {
        setGoods(listOfGoods);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5firstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
