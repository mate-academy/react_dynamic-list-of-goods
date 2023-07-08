import React, { useState } from 'react';

import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const makeSetGoods
    = (callback: () => any) => async () => setGoods(await callback());

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={makeSetGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={makeSetGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={makeSetGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {!!goods.length && (
        <GoodsList
          goods={goods}
        />
      )}
    </div>
  );
};
