import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const data = await getAll();

    setGoods(data);
  };

  const getFirst5Goods = async () => {
    const data = await get5First();

    setGoods(data);
  };

  const getRedColorGoods = async () => {
    const data = await getRedGoods();

    setGoods(data);
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="container-buttons">
        <button
          className="button is-rounded"
          type="button"
          data-cy="all-button"
          onClick={getAllGoods}
        >
          Load all goods
        </button>

        <button
          className="button is-rounded"
          type="button"
          data-cy="first-five-button"
          onClick={getFirst5Goods}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-rounded"
          type="button"
          data-cy="red-button"
          onClick={getRedColorGoods}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
