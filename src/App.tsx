import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [click, setClick] = useState('0');

  useEffect(() => {
    if (click === '1') {
      getAll().then(data => setGoods(data));
    } else if (click === '2') {
      get5First().then(data => setGoods(data));
    } else if (click === '3') {
      getRed().then(data => setGoods(data));
    }
  }, [click]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => setClick('1')}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setClick('2')}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => setClick('3')}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
