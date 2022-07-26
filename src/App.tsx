import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  const handleGetAll = () => {
    getAll()
      .then(newGoods => {
        setGoods(newGoods);
      });
  };

  const handleGet5First = () => {
    get5First()
      .then(first5 => {
        setGoods(first5);
      });
  };

  const handleGetRedGoods = () => {
    getRedGoods()
      .then(redOnes => {
        setGoods(redOnes);
      });
  };

  return (
    <>
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={handleGetAll}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={handleGet5First}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={handleGetRedGoods}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    </>
  );
};
