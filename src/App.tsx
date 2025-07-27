import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const LOAD_ALL = 'Load All goods';
const LOAD_FIVE = 'Load 5 first goods';
const LOAD_RED = 'Load red goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sortField, setSortField] = useState('');

  useEffect(() => {
    if (sortField === LOAD_ALL) {
      getAll().then(setGoods);
    } else if (sortField === LOAD_FIVE) {
      get5First().then(setGoods);
    } else if (sortField === LOAD_RED) {
      getRedGoods().then(setGoods);
    }
  }, [sortField]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSortField(LOAD_ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSortField(LOAD_FIVE)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSortField(LOAD_RED)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
