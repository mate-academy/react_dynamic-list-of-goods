import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [users, setUsers] = useState<Good[] | null>(null);

  const getGoods = async (request: () => Promise<Good[]>) => {
    const response = await request().then(apiGoods => apiGoods);

    if (response) {
      setUsers(() => {
        return response;
      });

      return;
    }

    setUsers(null);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getGoods(getAll);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          getGoods(get5First);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getGoods(getRedGoods);
        }}
      >
        Load red goods
      </button>

      {users !== null
        && <GoodsList goods={users} />}
    </div>
  );
};
