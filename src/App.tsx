import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGoodsFromServer = (promise: Promise<Good[]>) => {
    promise.then((receivedGoods) => {
      setGoods(receivedGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoodsFromServer(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoodsFromServer(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoodsFromServer(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
