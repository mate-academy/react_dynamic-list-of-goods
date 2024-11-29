import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoogs] = useState<Good[]>([]);

  const showAllGoogs = () => {
    getAll().then(setGoogs);
  };

  const show5FirstGoogs = () => {
    get5First().then(setGoogs);
  };

  const showRedGoogs = () => {
    getRedGoods().then(setGoogs);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showAllGoogs}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={show5FirstGoogs}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showRedGoogs}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
