import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickAll = () => {
    getAll()
      .then(good => setGoods(good));
  };

  const handleClick5First = () => {
    get5First()
      .then(good => setGoods(good));
  };

  const handleClickRed = () => {
    getRedGoods()
      .then(good => setGoods(good));
  };

  return (
    <div className="App">
      <div className="App--header">
        <h1>Dynamic list of Goods</h1>
      </div>

      <div className="button-container">
        <button
          className="button-container button"
          type="button"
          data-cy="all-button"
          onClick={handleClickAll}
        >
          Load all goods
        </button>

        <button
          className="button-container button"
          type="button"
          data-cy="first-five-button"
          onClick={handleClick5First}
        >
          Load 5 first goods
        </button>

        <button
          className="button-container button"
          type="button"
          data-cy="red-button"
          onClick={handleClickRed}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
