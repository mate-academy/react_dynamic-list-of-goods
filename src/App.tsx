import React, { useState } from 'react';
import { GoodsList } from './GoodsList';
import './App.scss';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = async () => {
    const dataFromServer = await goodsAPI.getAll();

    setGoods(dataFromServer);
  };

  const handleGet5First = async () => {
    const dataFromServer = await goodsAPI.get5First();

    setGoods(dataFromServer);
  };

  const handleGetRedGoods = async () => {
    const dataFromServer = await goodsAPI.getRedGoods();

    setGoods(dataFromServer);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
