import React, { useState } from 'react';
import 'bulma';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App content">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-info"
        onClick={() => getAll().then(list => setGoods(list))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-info"
        onClick={() => get5First().then(list => setGoods(list))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-info"
        onClick={() => getRedGoods().then(list => setGoods(list))}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
