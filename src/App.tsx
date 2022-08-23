import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleResponse = (get: () => Promise<Good[]>) => {
    get().then(response => setGoods(response));
  };

  return (
    <div className="App panel">
      <h1 className="panel-heading">Dynamic list of Goods</h1>

      <button
        type="button"
        className="button"
        data-cy="all-button"
        onClick={() => {
          handleResponse(getAll);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        className="button"
        data-cy="first-five-button"
        onClick={() => {
          handleResponse(get5First);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="button"
        data-cy="red-button"
        onClick={() => {
          handleResponse(getRed);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
