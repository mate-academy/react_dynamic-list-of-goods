import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const getGoods = (goodsFromServer: Promise<Good[]>) => {
    return goodsFromServer
      .then(loadedGoods => setGoodsList(loadedGoods));
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1
          className="App__title"
        >
          Dynamic list of Goods
        </h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={() => getGoods(getAll())}
          className="App__button App__button--all"
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => getGoods(get5First())}
          className="App__button App__button--five"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => getGoods(getRedGoods())}
          className="App__button App__button--red"
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goodsList} />
    </div>
  );
};
