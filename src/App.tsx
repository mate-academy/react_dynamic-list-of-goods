/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAll = async () => {
    const list = await getAll();

    setGoods(list);
  };

  const showFive = async () => {
    const list = await get5First();

    setGoods(list);
  };

  const showRed = async () => {
    const list = await getRedGoods();

    setGoods(list);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={showAll}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={showFive}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={showRed}
      >
        Load red goods
      </button>

      <ul>
        {goods.map((el: Good) => (
          <li>{el.name}</li>
        ))}
      </ul>
    </>

  );
};

export default App;
