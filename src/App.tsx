import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma/css/bulma.css';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickAll = () => {
    getAll().then(setGoods);
  };

  const handleClickMax5 = () => {
    get5First().then(setGoods);
  };

  const handleClickAllRed = () => {
    getRedGoods().then(setGoods);
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        className="button margin is-info"
        type="button"
        data-cy="all-button"
        onClick={handleClickAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickMax5}
        className="button margin is-info"
      >
        Load 5 first goods
      </button>

      <button
        className="button margin is-info"
        type="button"
        data-cy="red-button"
        onClick={handleClickAllRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
