import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods as getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>();

  const getAllGoods = async () => {
    const response = await getAll();

    setGoods(response);
  };

  const getFiveFirstGoods = async () => {
    const response = await get5First();

    setGoods(response);
  };

  const getRedGoods = async () => {
    const response = await getRed();

    setGoods(response);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFiveFirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedGoods}>
        Load red goods
      </button>

      {goods && <GoodsList goods={goods} />}
    </div>
  );
};
