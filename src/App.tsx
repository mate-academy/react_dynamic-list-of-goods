import React, { useState } from 'react';
import 'bulma';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);

  const getAllHandler = async () => {
    const result = await getAll();

    setGoods(result);
  };

  const getFiveHandler = async () => {
    const result = await get5First();

    setGoods(result);
  };

  const getRedHandler = async () => {
    const result = await getRedGoods();

    setGoods(result);
  };

  return (
    <div className="App content">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllHandler}
        className="button is-primary"
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFiveHandler}
        className="button is-primary"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedHandler}
        className="button is-primary"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
