import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    try {
      const loadedGoods = await goodsAPI.getAll();

      setGoods(loadedGoods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const load5FirstGoods = async () => {
    try {
      const loadedGoods = await goodsAPI.get5First();

      setGoods(loadedGoods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const loadRedGoods = async () => {
    try {
      const loadedGoods = await goodsAPI.getRed();

      setGoods(loadedGoods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
