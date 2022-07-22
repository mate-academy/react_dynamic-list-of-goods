import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => (
  <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button type="button" data-cy="all-button">
      Load all goods
    </button>

    <button type="button" data-cy="first-five-button">
      Load 5 first goods
    </button>

    <button type="button" data-cy="red-button">
      Load red goods
    </button>

    <GoodsList goods={[]} />
  </div>
);
