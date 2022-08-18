import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handelGet5First = () => {
    get5First()
      .then((result) => {
        const goods5 = [...result]
          .sort((itemA, itemB) => itemA.name.localeCompare(itemB.name))
          .filter((_, index) => index < 5);

        setGoods(goods5);
      });
  };

  const handelGetRed = () => {
    getRedGoods()
      .then((result) => {
        const goodsRed = result.filter(item => item.color === 'red');

        setGoods(goodsRed);
      });
  };

  const handelGetAll = () => {
    getAll()
      .then((result: Good[]): void => setGoods(result));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handelGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handelGet5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handelGetRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
