import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadData = (loadCallback:() => Promise<Good[]>) => {
    loadCallback().then(loadedGoods => setGoods(loadedGoods));
  };

  return (
    <>
      <GoodsList goods={goods} />
      <button
        type="button"
        onClick={() => loadData(getAll)}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={() => loadData(get5First)}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={() => loadData(getRed)}
      >
        Load red goods
      </button>
    </>

  );
};

export default App;
