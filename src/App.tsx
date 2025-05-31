import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import {
  loadAllGoods,
  loadFirstFiveGoods,
  loadRedGoods,
} from './helpers/goodsHelpers';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadAllGoods(setGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadFirstFiveGoods(setGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadRedGoods(setGoods)}
      >
        Load 5 first goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
