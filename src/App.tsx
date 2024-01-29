import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [mode, setMode] = useState('all');

  useEffect(() => {
    switch (mode) {
      case 'all':
        goodsAPI.getAll().then(result => setGoods(result));
        break;
      case 'five':
        goodsAPI.getAll().then(result => setGoods(result
          .sort((one, two) => one.name.localeCompare(two.name)).slice(0, 5)));
        break;
      default:
        goodsAPI.getAll().then(result => setGoods(result
          .filter(item => item.color === 'red')));
    }
  }, [mode]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setMode('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setMode('five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setMode('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
