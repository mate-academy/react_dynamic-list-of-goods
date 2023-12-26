import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [users, setUsers] = useState<Good[]>([]);

  const handleAllUsers = () => {
    getAll().then(setUsers);
  };

  const handleFiveUsers = () => {
    get5First().then(setUsers);
  };

  const handleRedUsers = () => {
    getRedGoods().then(setUsers);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={handleAllUsers}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={handleFiveUsers}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={handleRedUsers}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={users} />
    </div>
  );
};
