import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [clickedBtn, setClickBtn] = useState('');

  useEffect(() => {
    if (clickedBtn === 'all') {
      getAll().then(data => setGoods(data));
    }

    if (clickedBtn === 'red') {
      getRedGoods().then(data => setGoods(data));
    }

    if (clickedBtn === 'five') {
      get5First().then(data => setGoods(data));
    }
  }, [clickedBtn]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setClickBtn('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setClickBtn('five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setClickBtn('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
