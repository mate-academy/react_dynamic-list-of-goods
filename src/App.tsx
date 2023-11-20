import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoogs] = useState<Good[]>([]);

  const showGetAll = () => {
    return getAll()
      .then(good => {
        setGoogs(good);
      });
  };

  const show5First = () => {
    return get5First()
      .then(good => {
        setGoogs(good);
      });
  };

  const showRedGoods = () => {
    return getRedGoods()
      .then(good => {
        setGoogs(good);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={showGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={show5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={showRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
