import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
// or
// import * as goodsAPI from './api/goods';

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
        onClick={() => getGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
