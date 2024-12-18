import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [goodList, setGoodList] = useState<Good[]>([]);

  const handleShowAllGoods = () => {
    getAll().then(goods => {
      setGoodList(goods);
    });
  };

  const handleShow5First = () => {
    get5First().then(goods => {
      setGoodList(
        goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
      );
    });
  };

  const handleShowAllRed = () => {
    getRedGoods().then(goods => {
      setGoodList(goods.filter(good => good.color === 'red'));
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleShowAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleShow5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleShowAllRed}>
        Load red goods
      </button>

      <GoodsList goods={goodList} />
    </div>
  );
};
