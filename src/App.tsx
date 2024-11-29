import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';
export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good []>([]);

  const handleAllClick = () => {
    getAll()
      .then(usersFromServer => setGoods(usersFromServer));
  }

  const handleFirstFiveClick = () => {
    get5First()
      .then(usersFromServer => setGoods(usersFromServer));
  }

  const handleRedClick = () => {
    getRedGoods()
      .then(usersFromServer => setGoods(usersFromServer));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  )
};
