import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const goodsFromServer = (getGoods: () => Promise<Good[]>) => {
    getGoods().then(serverGoods => setGoods(serverGoods));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => goodsFromServer(getAll)}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={() => goodsFromServer(get5First)}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={() => goodsFromServer(getRedGoods)}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
