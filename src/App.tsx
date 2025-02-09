import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [fetchTrigger, setFetchTrigger] = useState('');

  useEffect(() => {
    switch (fetchTrigger) {
      case 'all':
        goodsAPI.getAll().then(setGoods);
        break;

      case '5first':
        goodsAPI.get5First().then(setGoods);
        break;

      case 'red':
        goodsAPI.getRedGoods().then(setGoods);
        break;

      default:
        // eslint-disable-next-line no-console
        console.warn('unknown fetch trigger');
        break;
    }
  }, [fetchTrigger]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFetchTrigger('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFetchTrigger('5first')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFetchTrigger('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
