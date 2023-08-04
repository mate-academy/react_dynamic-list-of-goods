import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [allGoods, setAllGoods] = useState(false);
  const [fiveGoods, setFiveGoods] = useState(false);
  const [redGoods, setRedGoods] = useState(false);

  useEffect(() => {
    getRedGoods().then(setGoods);
  }, [redGoods]);

  useEffect(() => {
    get5First().then(setGoods);
  }, [fiveGoods]);

  useEffect(() => {
    getAll().then(setGoods);
  }, [allGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setAllGoods(!allGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFiveGoods(!fiveGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setRedGoods(!redGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
