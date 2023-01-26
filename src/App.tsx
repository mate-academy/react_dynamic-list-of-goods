import React, { useState } from 'react';
import { Good } from './types/Good';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadHandler = () => {
    getAll().then(data => setGoods(data));
  };

  const load5Handler = () => {
    get5First().then(data => setGoods(data));
  };

  const loadRedHandler = () => {
    getRed().then((data: Good[]) => setGoods(data));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadHandler}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5Handler}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedHandler}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
