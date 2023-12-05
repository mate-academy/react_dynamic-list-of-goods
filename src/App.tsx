import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [renderedGoods, setRenderedGoods] = useState<Good[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value === 'firstFive') {
      get5First()
        .then(setRenderedGoods);
    }

    if (value === 'all') {
      getAll()
        .then(setRenderedGoods);
    }

    if (value === 'red') {
      getRedGoods()
        .then(setRenderedGoods);
    }
  }, [value]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setValue('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setValue('firstFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setValue('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={renderedGoods} />
    </div>
  );
};
