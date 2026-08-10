import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
//import { first } from 'cypress/types/lodash';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function loadAll() {
    getAll()
      .then(setGoods)
      .catch(() => setGoods([]));
  }

  function loadFive() {
    get5First()
      .then(setGoods)
      .catch(() => setGoods([]));
  }

  function loadRed() {
    getRedGoods()
      .then(setGoods)
      .catch(() => setGoods([]));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={loadAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={loadFive} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={loadRed} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
