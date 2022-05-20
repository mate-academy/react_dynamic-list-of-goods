import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './component/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAllGoods = async () => {
    const newGood = await getAll();

    setGoods([...newGood]);
  };

  const showFirsFiveGoods = async () => {
    const newGood = await get5First();

    setGoods(newGood);
  };

  const showRedGoods = async () => {
    const newGood = await getRedGoods();

    setGoods(newGood);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button type="button" onClick={showAllGoods}>
        All Goods
      </button>
      <button type="button" onClick={showFirsFiveGoods}>
        First five goods
      </button>
      <button type="button" onClick={showRedGoods}>
        Red Goods
      </button>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
