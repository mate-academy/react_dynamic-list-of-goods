import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    getAll().then(data => {
      setGoods(data);
    });
  }, []);

  const all = () => getAll().then(setGoods);
  const get5 = () => get5First().then(setGoods);
  const getRed = () => getRedGoods().then(setGoods);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={all}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={get5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
