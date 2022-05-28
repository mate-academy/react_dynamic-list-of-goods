import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAllGoods = async () => {
    setGoods(await getAll());
  };

  const showFirsFiveGoods = async () => {
    setGoods(await get5First());
  };

  const showRedGoods = async () => {
    setGoods(await getRedGoods());
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
