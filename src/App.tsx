import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [users, setUsers] = useState<Good[] | null>(null);

  const getUsers = async (request: () => Promise<Good[]>) => {
    const response = await request().then(apiUsers => apiUsers);

    if (response !== undefined) {
      setUsers(() => {
        return response;
      });
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getUsers(getAll);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          getUsers(get5First);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getUsers(getRedGoods);
        }}
      >
        Load red goods
      </button>

      {users !== null
        && <GoodsList goods={users} />}
    </div>
  );
};
