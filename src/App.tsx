/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [mode, setMode] = useState('all');

  useEffect(() => {
    goodsAPI.getAll().then(result => setGoods(
      mode === 'all' ? result
        : mode === 'five'
          // eslint-disable-next-line max-len
          ? result.sort((one, two) => one.name.localeCompare(two.name)).slice(0, 5)
          : result.filter(item => item.color === 'red'),
    ));
  }, [mode]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setMode('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setMode('five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setMode('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
