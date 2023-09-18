import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleSelectAll = async () => {
    const g00ds = getAll();

    setGoods(await g00ds);
  };

  const handleSelect5 = async () => {
    const g00ds = get5First();

    setGoods(await g00ds);
  };

  const handleSelectRed = async () => {
    const g00ds = getRedGoods();

    setGoods(await g00ds);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleSelectAll()}
      >
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleSelect5()}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleSelectRed()}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
