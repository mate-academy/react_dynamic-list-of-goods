import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

enum Mode {
  'NON',
  'FIRST_FIVE',
  'RED',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const strategy = {
    [Mode.NON]: getAll,
    [Mode.FIRST_FIVE]: get5First,
    [Mode.RED]: getRedGoods,
  };

  const handleClick = (change: Mode) => {
    strategy[change]()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(Mode.NON)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(Mode.FIRST_FIVE)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(Mode.RED)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
