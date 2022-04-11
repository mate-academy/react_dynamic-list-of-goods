import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = (toLoadCallback:() => Promise<Good[]>) => {
    toLoadCallback().then(items => setGoods(items));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => loadGoods(getAll)}
      >
        Load All goods
      </button>

      <button
        type="button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
