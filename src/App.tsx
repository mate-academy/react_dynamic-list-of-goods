import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoods = async () => {
    const allGoodsFromServer = await getAll();

    setGoods(allGoodsFromServer);
  };

  const fiveFirstGoods = async () => {
    const fiveFirstGoodsFromServer = await get5First();

    setGoods(fiveFirstGoodsFromServer);
  };

  const onlyRedGoods = async () => {
    const onlyRedGoodsFromServer = await getRedGoods();

    setGoods(onlyRedGoodsFromServer);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={allGoods}
      >
        All goods
      </button>
      <button
        type="button"
        onClick={fiveFirstGoods}
      >
        5 first goods
      </button>
      <button
        type="button"
        onClick={onlyRedGoods}
      >
        Red goods
      </button>

      <GoodsList goods={goods} />

    </div>
  );
};

export default App;
