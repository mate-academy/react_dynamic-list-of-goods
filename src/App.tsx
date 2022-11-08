import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const defaultGoods: Good[] = [];
  const [goods, setGoods] = useState(defaultGoods);

  const getAllHere = () => {
    getAll().then(good => {
      setGoods(good);
    });
  };

  const get5Here = () => {
    get5First().then(good => {
      setGoods(good);
    });
  };

  const getredHere = () => {
    getRedGoods().then(good => {
      setGoods(good);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllHere}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5Here}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getredHere}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
