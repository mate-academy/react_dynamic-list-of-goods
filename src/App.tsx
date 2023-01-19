import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import * as goodsAPI from './api/goods';

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
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClick5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleClickRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
