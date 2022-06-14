/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './component/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const addAllGods = () => (getAll()
    .then((good) => setGoods(good)));

  const get5Goods = () => {
    get5First()
      .then((good) => setGoods(good));
  };

  const getRed = () => {
    getRedGoods()
      .then(good => setGoods(good));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={addAllGods}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={get5Goods}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={getRed}
      >
        Load red goods
      </button>

      <GoodList goods={goods} />

    </>
  );
};

export default App;
