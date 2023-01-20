import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import 'bulma/css/bulma.css';

import {
  getAll,
  get5First,
  getRed,
} from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = async () => {
    const newGoods: Good[] = await getAll();

    setGoods(newGoods);
  };

  const handleGet5First = async () => {
    const newGoods: Good[] = await get5First();

    setGoods(newGoods);
  };

  const handleGetRedGoods = async () => {
    const newGoods: Good[] = await getRed();

    setGoods(newGoods);
  };

  const basicClassesForButton = 'button is-primary m-2';

  return (
    <div className="
        App
        section
        is-flex
        is-flex-direction-column
        is-align-items-center
      "
    >
      <h1 className="title">Dynamic list of Goods</h1>

      <div>
        <button
          type="button"
          data-cy="all-button"
          onClick={handleGetAll}
          className={`${basicClassesForButton}`}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={handleGet5First}
          className={`${basicClassesForButton}`}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={handleGetRedGoods}
          className={`${basicClassesForButton} is-danger`}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
