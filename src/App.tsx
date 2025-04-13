import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  const loadAllGoods = async () => {
    const allGoods = getAll();

    setGoods(await allGoods);
  };

  const load5FirstGoods = async () => {
    const first5Goods = get5First();

    setGoods(await first5Goods);
  };

  const loadRedGoods = async () => {
    const redGoods = getRedGoods();

    setGoods(await redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={loadAllGoods} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={load5FirstGoods}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={loadRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={[...goods]} />
    </div>
  );
};
