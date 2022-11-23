import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import 'bulma';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAllGoods = async () => {
    const listOfTodos = await getAll();

    setGoods(listOfTodos);
  };

  const handleFiveGoods = async () => {
    const listOfTodos = await get5First();

    setGoods(listOfTodos);
  };

  const handleRedGoods = async () => {
    const listOfTodos = await getRed();

    setGoods(listOfTodos);
  };

  return (
    <div className="App">
      <h1 className="title is-2">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-primary is-medium"
        onClick={handleLoadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-link is-medium"
        onClick={handleFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger is-medium"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
