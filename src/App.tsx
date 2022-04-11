import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState((): Good[] => []);

  const getAllUsers = () => {
    getAll()
      .then(user => {
        setGoods(user);
      });
  };

  const get5FirstUsers = () => {
    get5First()
      .then(user => {
        setGoods(user.sort(
          (userA, userB) => userA.name.localeCompare(userB.name),
        ).slice(0, 5));
      });
  };

  const getRedGoodsUsers = () => {
    getRedGoods()
      .then(user => {
        setGoods(user.filter(good => good.color === 'red'));
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={getAllUsers}
      >
        Load All
      </button>
      <button
        type="button"
        onClick={get5FirstUsers}
      >
        Load 5
      </button>
      <button
        type="button"
        onClick={getRedGoodsUsers}
      >
        Load red
      </button>

      <GoodsList goods={goods} />
    </>
  );
};
