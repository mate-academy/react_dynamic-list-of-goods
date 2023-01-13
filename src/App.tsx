import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './components/GoodsList/GoodsList';

import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGoods = (getGoods: Promise<Good[]>) => {
    getGoods
      .then(setGoods);
  };

  return (
    <div className="App">
      <h1 className="title is-3">Dynamic list of Goods</h1>

      <button
        className="button is-info mr-3"
        type="button"
        data-cy="all-button"
        onClick={() => handleGoods(getAll())}
      >
        Load all goods
      </button>

      <button
        className="button is-success mr-3"
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoods(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-danger"
        type="button"
        data-cy="red-button"
        onClick={() => handleGoods(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
