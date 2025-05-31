import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>();

  const handleGoodsChange: (changer: string) => void = (changer: string) => {
    switch (changer) {
      case 'all':
        getAll().then(setGoods);
        break;
      case 'first':
        get5First().then(setGoods);
        break;
      case 'red':
        getRedGoods().then(setGoods);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => handleGoodsChange('all')}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => handleGoodsChange('first')}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => handleGoodsChange('red')}
        data-cy="red-button"
      >
        Load red goods
      </button>

      {goods && <GoodsList goods={goods} />}
    </div>
  );
};
