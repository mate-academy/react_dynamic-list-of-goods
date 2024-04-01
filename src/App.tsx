import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [state, setState] = useState<Good[] | null>(null);

  const allGoods = async () => {
    setState(await getAll());
  };

  const first5 = async () => {
    setState(await get5First());
  };

  const redGood = async () => {
    setState(await getRed());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={allGoods} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={first5} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={redGood} type="button" data-cy="red-button">
        Load red goods
      </button>

      {state && <GoodsList goods={state} />}
    </div>
  );
};
