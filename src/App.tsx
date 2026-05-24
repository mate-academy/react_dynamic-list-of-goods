import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState([]);

  const handleLoadAll = async () => {
    const data = await goodsAPI.getAll();

    setGoods(data);
  };

  const handleLoadFive = async () => {
    const data = await goodsAPI.get5First();

    setGoods(data);
  };

  const handleLoadRed = async () => {
    const data = await goodsAPI.getRedGoods();

    setGoods(data);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handleLoadAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={handleLoadFive}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={handleLoadRed} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
