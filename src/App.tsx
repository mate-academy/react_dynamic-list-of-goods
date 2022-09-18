import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const fetchAllGoods = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const fetch5First = async () => {
    const firstFiveGoods = await get5First();

    setGoods(firstFiveGoods);
  };

  const fetchRedGoods = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1 className="title has-text-centered">
        Dynamic list of Goods
      </h1>

      <div
        className="buttons is-centered"
      >

        <button
          className="button is-primary is-light"
          type="button"
          data-cy="all-button"
          onClick={() => {
            fetchAllGoods();
          }}
        >
          Load all goods
        </button>

        <button
          className="button is-primary is-light"
          type="button"
          data-cy="first-five-button"
          onClick={() => {
            fetch5First();
          }}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-primary is-light"
          type="button"
          data-cy="red-button"
          onClick={() => {
            fetchRedGoods();
          }}
        >
          Load red goods
        </button>

      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
