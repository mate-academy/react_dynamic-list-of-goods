import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [users, setUsers] = useState<Good[]>([]);

  const handleAllGoods = async () => {
    const users1 = await getAll();

    setUsers(users1);
  };

  const handle5Goods = async () => {
    const users2 = await get5First();

    setUsers(users2);
  };

  const handleRedGoods = async () => {
    const users3 = await getRedGoods();

    setUsers(users3);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleAllGoods()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handle5Goods()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleRedGoods()}
      >
        Load red goods
      </button>

      <GoodsList goods={users} />
    </div>
  );
};
