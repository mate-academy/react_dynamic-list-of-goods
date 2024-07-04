import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const handleShowAll = () => {
    getAll().then(setGoodsList);
  };

  const handleShowFirstFive = () => {
    get5First().then(setGoodsList);
  };

  const handleShowRedGoods = () => {
    getRedGoods().then(setGoodsList);
  };

  return (
    <div className="App section  m-3">
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          className="button is-info"
          type="button"
          data-cy="all-button"
          onClick={handleShowAll}
        >
          Load all goods
        </button>

        <button
          className="button is-warning"
          type="button"
          data-cy="first-five-button"
          onClick={handleShowFirstFive}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-danger"
          type="button"
          data-cy="red-button"
          onClick={handleShowRedGoods}
        >
          Load red goods
        </button>
      </div>

      {goodsList.length > 0 && <GoodsList goods={goodsList} />}
    </div>
  );
};
