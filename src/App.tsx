import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [apiQuery, setQuery] = useState('all');

  useEffect(() => {
    switch (apiQuery) {
      case 'all':
        getAll().then(setGoods);
        break;
      case 'first5':
        get5First().then(setGoods);
        break;
      case 'red':
        getRedGoods().then(setGoods);
        break;
    }
  }, [apiQuery]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => setQuery('all')}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => setQuery('first5')}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => setQuery('red')}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
