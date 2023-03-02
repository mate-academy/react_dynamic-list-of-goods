import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState([{
    id: 0,
    name: '',
    color: '',
  }]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll().then(setVisibleGoods);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First().then(setVisibleGoods);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods().then(setVisibleGoods);
        }}
      >
        Load red goods
      </button>

      {visibleGoods.length > 1 && (
        <GoodsList goods={visibleGoods} />
      )}
    </div>
  );
};
