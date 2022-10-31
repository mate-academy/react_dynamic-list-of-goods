import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const handle5First = async () => {
    const first5First = await get5First();

    setGoods(first5First);
  };

  const handleRedGoods = async () => {
    const firstRedGoods = await getRedGoods();

    setGoods(firstRedGoods);
  };

  return (
    <div>
      <h1 className="title is-2 has-text-centered">
        Dynamic list of Goods
      </h1>

      <div className="buttons is-centered are-medium">
        <button
          className="button is-success is-rounded"
          type="button"
          data-cy="all-button"
          onClick={handleAllGoods}
        >
          Load all goods
        </button>

        <button
          className="button is-info is-rounded"
          type="button"
          data-cy="first-five-button"
          onClick={handle5First}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-danger is-rounded"
          type="button"
          data-cy="red-button"
          onClick={handleRedGoods}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
