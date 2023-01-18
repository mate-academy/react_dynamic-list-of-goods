import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.css';

import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleShowAllGoods = () => {
    getAll()
      .then(setGoods);
  };

  const handleShow5First = () => {
    get5First()
      .then(setGoods);
  };

  const handleShowRedOnes = () => {
    getRed()
      .then(setGoods);
  };

  return (
    <div className="App content">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        className="button is-primary is-outlined btn-class"
        data-cy="all-button"
        onClick={handleShowAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-link is-outlined btn-class"
        onClick={handleShow5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger is-outlined btn-class"
        onClick={handleShowRedOnes}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
