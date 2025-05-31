import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleShowAll = () => {
    getAll().then(goodsfromServer => setGoods(goodsfromServer));
  };

  const handleShow5 = () => {
    get5First().then(goodsfromServer => setGoods(goodsfromServer));
  };

  const handleShowOnlyRed = () => {
    getRedGoods().then(goodsfromServer => setGoods(goodsfromServer));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleShowAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleShow5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleShowOnlyRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
