import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';

export const App: React.FC = () => {
  const [actualGoods, setGoods] = useState<Good[]>([]);

  const selectHandler = (kindOfSelection: () => Promise<Good[]>) => {
    kindOfSelection().then(goods => setGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => selectHandler(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => selectHandler(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => selectHandler(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={actualGoods} />
    </div>
  );
};
