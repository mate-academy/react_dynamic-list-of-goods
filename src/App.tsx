import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getRedHandler = () => {
    getRedGoods()
      .then(result => setGoods(result));
  };

  const get5Handler = () => {
    get5First()
      .then(result => setGoods(result));
  };

  const getAllHandler = () => {
    getAll()
      .then(result => setGoods(result));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllHandler}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={get5Handler}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedHandler}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
