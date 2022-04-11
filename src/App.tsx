import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsToLoad } from './enums/GoodsToLoad';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = (toLoad: GoodsToLoad) => {
    switch (toLoad) {
      case GoodsToLoad.AllGoods:
        getAll().then(items => setGoods(items));
        break;
      case GoodsToLoad.firstFiveGoods:
        get5First().then(items => setGoods(items));
        break;
      case GoodsToLoad.RedGoods:
        getRedGoods().then(item => setGoods(item));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => loadGoods(GoodsToLoad.AllGoods)}
      >
        Load All goods
      </button>

      <button
        type="button"
        onClick={() => loadGoods(GoodsToLoad.firstFiveGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => loadGoods(GoodsToLoad.RedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
