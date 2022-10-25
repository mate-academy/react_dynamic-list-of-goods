import React, { useState } from 'react';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const LoadAllGoods = async () => {
    try {
      const data = await getAll();

      setGoods(data);
    } catch (e) {
      throw new Error('Error, sorry :(');
    }
  };

  const LoadFiveFirstGoods = async () => {
    try {
      const data = await get5First();

      setGoods(data);
    } catch (e) {
      throw new Error('Error, sorry :(');
    }
  };

  const LoadRedGoods = async () => {
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch (e) {
      throw new Error('Error, sorry :(');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={LoadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={LoadFiveFirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={LoadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
