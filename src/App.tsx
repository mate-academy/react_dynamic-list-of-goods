import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [list, setList] = useState<Good []>([]);



  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => getAll().then(setList)}
        data-cy="all-button">
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(setList)}>
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRed().then(setList)}>
        Load red goods
      </button>

      <GoodsList goods={list} />
    </div>
  );
};
