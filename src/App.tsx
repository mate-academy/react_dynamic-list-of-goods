import './App.scss';

import React, { useState } from 'react';
import { get5First, getAll, getRed } from './api/goods';

import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[] | null>(null);
  const [firstGoods, setFirstGoods] = useState<Good[] | null>(null);
  const [redGoods, setRedGoods] = useState<Good[] | null>(null);

  async function handleClick(
    dataGetter: () => Promise<Good[]>,
    stateSetter: React.Dispatch<React.SetStateAction<Good[] | null>>,
  ) {
    const goods = await dataGetter();
    stateSetter(goods);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleClick(getAll, setAllGoods);
        }}
      >
        Load all goods
      </button>
      <GoodsList goods={allGoods ? allGoods : []} />

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleClick(get5First, setFirstGoods);
        }}
      >
        Load 5 first goods
      </button>
      <GoodsList goods={firstGoods ? firstGoods : []} />

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleClick(getRed, setRedGoods);
        }}
      >
        Load red goods
      </button>
      <GoodsList goods={redGoods ? redGoods : []} />
    </div>
  );
};
