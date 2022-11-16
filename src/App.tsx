import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

type CallbackFromServer = () => Promise<Good[]>;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleOnClickSelected = (func : CallbackFromServer) => {
    func().then(products => setGoods(products));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleOnClickSelected(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(products => setGoods(products))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(products => setGoods(products))}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
