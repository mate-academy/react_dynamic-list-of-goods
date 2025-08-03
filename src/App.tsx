import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function setAll() {
    getAll().then(result => setGoods(result));
  }

  function set5First() {
    get5First().then(result => setGoods(result));
  }

  function setRed() {
    getRedGoods().then(result => setGoods(result));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={setAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={set5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={setRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
