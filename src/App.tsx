import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [test, setTest] = useState('');
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    switch (test) {
      case 'all':
        getAll().then(setGoods);
        break;
      case '5':
        get5First().then(setGoods);
        break;
      case 'red':
        getRedGoods().then(setGoods);
        break;
      default:
        setGoods([]);
    }
  }, [test]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => setTest('all')}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setTest('5')}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => setTest('red')}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
