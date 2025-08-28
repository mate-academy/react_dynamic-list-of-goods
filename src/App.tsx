import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);

  const handleAll = async (event: MouseEvent) => {
    event.preventDefault();

    setGoods(await getAll());
  };

  const handle5First = async (event: MouseEvent) => {
    event.preventDefault();

    setGoods(await get5First());
  };

  const handleRed = async (event: MouseEvent) => {
    event.preventDefault();

    setGoods(await getRedGoods());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handleAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={handle5First} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={handleRed} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
