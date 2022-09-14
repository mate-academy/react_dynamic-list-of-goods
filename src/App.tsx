import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsFromApi, setGoods] = useState<Good[]>([]);

  const fetchAllGoods = async () => {
    const goods = await getAll();

    setGoods(goods);
  };

  const fetch5First = async () => {
    const goods = await get5First();

    setGoods(goods);
  };

  const fetchRedGoods = async () => {
    const goods = await getRedGoods();

    setGoods(goods);
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

      <GoodsList goods={goodsFromApi} />
    </div>
  );
};
