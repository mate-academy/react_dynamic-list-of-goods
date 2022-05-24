import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './components';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAll = async () => {
    const responce = await goodsAPI.getAll();

    return setGoods(responce);
  };

  const getFirstFive = async () => {
    const responce = await goodsAPI.get5First();

    return setGoods(responce);
  };

  const getRedGoods = async () => {
    const responce = await goodsAPI.getRedGoods();

    return setGoods(responce);
  };

  return (
    <div className="app">
      <h1 className="app__title">Dynamic list of goods</h1>

      <GoodsList goods={goods} />

      <div className="app__buttons">
        <button
          className="app__button"
          type="button"
          onClick={() => getAll()}
        >
          Load all goods
        </button>
        <button
          className="app__button"
          type="button"
          onClick={() => getFirstFive()}
        >
          Load first 5 goods
        </button>
        <button
          className="app__button"
          type="button"
          onClick={() => getRedGoods()}
        >
          Load all red goods
        </button>
      </div>
    </div>
  );
};

export default App;
