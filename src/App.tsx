import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [users, setUsers] = useState<Good[]>([]);

  const allUsers = () => {
    getAll()
      .then(res => {
        return setUsers(res);
      });
  };

  const first5Users = () => {
    get5First()
      .then(res => {
        return setUsers(res);
      });
  };

  const onlyRedUsers = () => {
    getRedGoods()
      .then(res => {
        return setUsers(res);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={allUsers}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={first5Users}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={onlyRedUsers}
      >
        Load red goods
      </button>

      <GoodsList goods={users} />
    </div>
  );
};
