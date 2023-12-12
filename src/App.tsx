import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value === 'allGoods') {
      getAll()
        .then(setGoods);
    }

    if (value === 'first5') {
      get5First()
        .then(setGoods);
    }

    if (value === 'red') {
      getRedGoods()
        .then(setGoods);
    }
  }, [value]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => setValue('allGoods')}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => setValue('first5')}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => setValue('red')}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
