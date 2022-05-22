import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
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

      <GoodsList goods={goods} />

      <button
        type="button"
        onClick={() => getGoods(getAll)}
      >
        load all goods
      </button>

      <button
        type="button"
        onClick={() => getGoods(getRedGoods)}
      >
        load red goods
      </button>

      <button
        type="button"
        onClick={() => getGoods(get5First)}
      >
        load 5 firs goods
      </button>
    </>
  );
};

export default App;
