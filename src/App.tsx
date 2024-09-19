import { useState, FC } from 'react';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';

import { GoodsList } from './GoodsList';

import './App.scss';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  // const loadGoods = async () => {
  //   const data = await getAll();

  //   setGoods(data);
  // };

  // const load5Goods = async () => {
  //   const data = await get5First();

  //   setGoods(data);
  // };

  // const loadRedGoods = async () => {
  //   const data = await getRedGoods();

  //   setGoods(data);
  // };

  const loadGoods = async (loader: () => Promise<Good[]>) => {
    const data = await loader();

    setGoods(data);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
