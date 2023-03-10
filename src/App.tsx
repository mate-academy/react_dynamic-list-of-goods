import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | void>([]);

  const getAllGoods = async () => {
    try {
      const allGoods = await goodsAPI.getAll();

      setGoods(allGoods);
    } catch (error) {
      throw new Error('error');
    }
  };

  const get5FirstGoods = async () => {
    try {
      const filteredGoods = await goodsAPI.get5First();

      setGoods(filteredGoods);
    } catch (error) {
      throw new Error('error');
    }
  };

  const getRedGoods = async () => {
    try {
      const filteredGoods = await goodsAPI.getRed();

      setGoods(filteredGoods);
    } catch (error) {
      throw new Error('error');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedGoods}
      >
        Load red goods
      </button>

      {goods && (<GoodsList goods={goods} />)}
    </div>
  );
};
