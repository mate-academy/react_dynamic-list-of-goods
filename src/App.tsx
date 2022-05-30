import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = (getGoods: () => Promise<Good[]>) => {
    getGoods()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => getAllGoods(getAll)}
      >
        Load All goods
      </button>

      <button
        type="button"
        onClick={() => getAllGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => getAllGoods(getRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
