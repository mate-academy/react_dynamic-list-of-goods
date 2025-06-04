import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [buttonType, setButtonType] = useState('');
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    if (buttonType === 'all') {
      getAll().then(goodsFromServ => setGoods(goodsFromServ));
    }

    if (buttonType === 'five') {
      get5First().then(goodsFromServ => setGoods(goodsFromServ));
    }

    if (buttonType === 'red') {
      getRedGoods().then(goodsFromServ => setGoods(goodsFromServ));
    }
  }, [buttonType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setButtonType('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setButtonType('five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setButtonType('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
