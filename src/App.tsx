import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import {Good} from "./types/Good";

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

    const handleOnClickAll = () => {
      getAll().then(setGoods);
    };

    const handleOnClick5Goods = () => {
      get5First().then(setGoods);
    };

    const handleOnClickRedGoods = () => {
      getRedGoods().then(setGoods);
    };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleOnClickAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleOnClick5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleOnClickRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods}/>
    </div>
  )
};
