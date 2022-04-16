import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = (callback:() => Promise<Good[]>) => {
    callback()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => {
          loadGoods(getAll);
        }}
      >
        Load All
      </button>
      <button
        type="button"
        onClick={() => {
          loadGoods(get5First);
        }}
      >
        Load 5
      </button>
      <button
        type="button"
        onClick={() => {
          loadGoods(getRedGoods);
        }}
      >
        Load red
      </button>

      <GoodsList goods={goods} />
    </>
  );
};
