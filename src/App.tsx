import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState('');

  const firstRendering = useRef(true);

  useEffect(() => {
    if (firstRendering.current) {
      firstRendering.current = false;

      return;
    }

    switch (loading) {
      case 'all':
        getAll().then(setGoods);
        break;
      case 'firstFive':
        get5First().then(setGoods);
        break;
      case 'getOnlyRed':
        getRedGoods().then(setGoods);
        break;
      default:
        getAll().then(setGoods);
        break;
    }
  }, [loading]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={() => setLoading('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setLoading('firstFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setLoading('getOnlyRed')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
