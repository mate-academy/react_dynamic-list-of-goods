import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type Good = {
  id: number,
  name: string,
  color: string,
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const goodsAll = () => {
    getAll()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  const goodsChooseFive = () => {
    get5First()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  const goodsChooseRed = () => {
    getRedGoods()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={goodsAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={goodsChooseFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={goodsChooseRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
