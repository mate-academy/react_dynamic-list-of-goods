import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function showAll() {
    getAll().then(users => setGoods(users));
  }

  function show5First() {
    get5First().then(users =>
      setGoods(users.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5)),
    );
  }

  function showOnlyRed() {
    getRedGoods().then(users =>
      setGoods(users.filter(user => user.color === 'red')),
    );
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={show5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showOnlyRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
