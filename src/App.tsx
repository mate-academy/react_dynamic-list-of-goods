import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { GoodsList } from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = (get: () => Promise<Good[]>) => {
    get()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => getGoods(getAll)}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={() => getGoods(get5First)}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={() => getGoods(getRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
