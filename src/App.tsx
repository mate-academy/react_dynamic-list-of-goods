import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [good, setGood] = useState(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(goodAll => setGood(goodAll))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(goodFirst => setGood(goodFirst))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(goodColor => setGood(goodColor))}
      >
        Load red goods
      </button>

      <GoodsList goods={good || []} />
    </div>
  );
};
