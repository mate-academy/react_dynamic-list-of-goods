import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [list, setList] = useState<Good[]>([]);
  const handleLoadAll = () => {
    getAll().then((goods) => setList(goods));
  };

  const handleLoad5First = async () => {
    setList(await get5First().then((goods) => goods.slice(5, -1)));
  };

  const handleLoadRedGoods = async () => {
    setList(
      await getRedGoods()
        .then((goods) => goods.filter((good) => good.color === 'red')),
    );
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={list} />
    </div>
  );
};
