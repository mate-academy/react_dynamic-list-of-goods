/* eslint-disable */
import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGods] = useState<Good[]>([]);

  const showAllGoods = () => {
    getAll().then(res => {
      setGods(res);
    })
  };

  const showFirsFiveGoods = () => {
    get5First().then(res => {
      setGods(res)
    })
  };

  const showRedGoods = () => {
    getRedGoods().then(res => {
      setGods(res);
    })
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type='button'
        onClick={showAllGoods}
      >
        Load All goods
      </button>

      <button
        type='button'
        onClick={showFirsFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type='button'
        onClick={showRedGoods}
      >
        Load red goods
      </button>

      <ul>
        {goods.map(good => {
          return (
            <li key={good.id}>
              {good.name}
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default App;
