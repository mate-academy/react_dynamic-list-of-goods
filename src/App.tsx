import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(res => setList(res))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(res => setList(res))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(res => setList(res))}
      >
        Load red goods
      </button>

      <GoodsList goods={list} />
    </div>
  );
};
