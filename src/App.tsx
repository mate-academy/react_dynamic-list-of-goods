import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([])

  const handleGoods = () => {
    getAll().then(data => {
      setGoods(data);
    });
  };

  const handleFirst5Goods = () => {
    get5First().then(data => {
      setGoods(data);
    });
  };

  const handleRedGoods = () => {
    getRedGoods().then(data => {
      setGoods(data);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5Goods}
        >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
        >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
}
