import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

enum Modes {
  'just5',
  'onlyRed',
  'all',
  'none',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [mode, setMode] = useState<Modes>(Modes.none);

  useEffect(() => {
    const loadAll = async () => {
      const allGoods = await goodsAPI.getAll();

      setGoods(allGoods);
    };

    const loadFirst5Goods = async () => {
      const first5Goods = await goodsAPI.get5First();

      setGoods(first5Goods);
    };

    const loadRedGoods = async () => {
      const getRedGoods = await goodsAPI.getRedGoods();

      setGoods(getRedGoods);
    };

    switch (mode) {
      case Modes.all:
        loadAll();
        break;

      case Modes.just5:
        loadFirst5Goods();
        break;

      case Modes.onlyRed:
        loadRedGoods();
        break;

      default:
        setGoods([]);
    }
  }, [mode]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setMode(Modes.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setMode(Modes.just5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setMode(Modes.onlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
