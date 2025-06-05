import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [load, setLoad] = useState('');

  useEffect(() => {
    switch (load) {
      case 'all':
        getAll().then(setGoods);
        break;

      case 'five':
        get5First().then(setGoods);
        break;

      case 'red':
        getRedGoods().then(setGoods);
        break;
      
      default:
        setGoods([]);
    }
  }, [load]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => setLoad('all')}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={() => setLoad('five')}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => setLoad('red')}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
