import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    switch (filter) {
      case 'first5':
        get5First().then(goodsFromServer => {
          setGoods(goodsFromServer);
        });
        break;

      case 'onlyRed':
        getRedGoods().then(goodsFromServer => {
          setGoods(goodsFromServer);
        });
        break;

      case 'all':
      default:
        getAll().then(goodsFromServer => {
          setGoods(goodsFromServer);
        });
    }
  }, [filter]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFilter('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFilter('first5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilter('onlyRed')}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
