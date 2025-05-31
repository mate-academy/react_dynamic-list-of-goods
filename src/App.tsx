import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [users, setUsers] = useState<Good[]>([]);

  function allGoods () {
    return getAll().then((userslist) => {
      setUsers(userslist);
    });
  }
  function getFisrt () {
    return get5First().then((userslist) => {
      setUsers(userslist);
    });
  }
  function getRed () {
    return getRedGoods().then((userslist) => {
      setUsers(userslist);
    });
  }
  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={allGoods} data-cy="all-button">
        Load all goods
      </button>

      <button type="button" onClick={getFisrt} data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" onClick={getRed} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={users} />
    </div>
  )
};
