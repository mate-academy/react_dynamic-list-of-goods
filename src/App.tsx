import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setGoods] = useState<Good[]>([]);

  const loadGoods = async (getGoods: Promise<Good[]>, goodsType: string) => {
    try {
      const goods = await getGoods;

      setGoods(goods);
    } catch {
      throw new Error(`Unable to load ${goodsType} goods`);
    }
  };

  const showFiveGoods = () => {
    loadGoods(get5First(), '5 first');
  };

  const showAllGoods = () => {
    loadGoods(getAll(), 'all');
  };

  const showRedGoods = () => {
    loadGoods(getRedGoods(), 'red');
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={showAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={showFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={showRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
