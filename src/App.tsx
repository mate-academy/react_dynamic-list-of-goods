import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './components/GoodsList';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const all = async () => {
    const response = await goodsAPI.getAll();

    return setGoods(response);
  };

  const firstFive = async () => {
    const response = await goodsAPI.get5First();

    return setGoods(response);
  };

  const red = async () => {
    const response = await goodsAPI.getRedGoods();

    return setGoods(response);
  };

  return (
    <div className="app">
      <h1 className="app__title">
        Dynamic list of Goods
      </h1>

      <GoodsList goods={goods} />

      <div className="app__buttons">
        <button
          type="button"
          onClick={() => all()}
          className="app__button"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => firstFive()}
          className="app__button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => red()}
          className="app__button"
        >
          Load red goods
        </button>
      </div>
    </div>
  );
};
