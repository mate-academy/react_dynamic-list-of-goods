import React, { useState } from 'react';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = (get: () => Promise<Good[]>) => {
    get().then(goodsFromServer => {
      setGoods(goodsFromServer);
    });
  };

  return (
    <>
      <h1>Dynamic list of goods</h1>
      <button
        type="button"
        onClick={() => getGoods(getAll)}
      >
        Get all goods
      </button>
      <button
        type="button"
        onClick={() => getGoods(get5First)}
      >
        Load first five goods
      </button>
      <button
        type="button"
        onClick={() => getGoods(getRedGoods)}
      >
        Load only red goods
      </button>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
