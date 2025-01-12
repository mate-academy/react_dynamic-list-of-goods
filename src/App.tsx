import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [users, setUsers] = useState<Good[]>([]);

  const handleAllUsers = (promise: Promise<Good[]>) => {
    promise.then((response: Good[]) => setUsers(response));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleAllUsers(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleAllUsers(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleAllUsers(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={users} />
    </div>
  );
};
