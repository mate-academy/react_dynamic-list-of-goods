import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = () => {
    getAll().then(loadedGoods => setGoods(loadedGoods));
  };

  const loadFive = () => {
    get5First().then(loadedGoods => setGoods(loadedGoods));
  };

  const loadRed = () => {
    getRed().then(loadedGoods => setGoods(loadedGoods));
  };

  return (
    <>
      <GoodsList goods={goods} />
      <button
        type="button"
        onClick={loadAll}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={loadFive}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={loadRed}
      >
        Load red goods
      </button>
    </>

  );
};

export default App;
