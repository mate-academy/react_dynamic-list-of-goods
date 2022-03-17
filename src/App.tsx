import React, { useState } from 'react';
import { GoodsList } from './GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async (getFunction: ()=>Promise<Good[]>) => {
    setGoods(await getFunction());
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => getAllGoods(getAll)}
      >
        Get All
      </button>

      <button
        type="button"
        onClick={() => getAllGoods(get5First)}
      >
        Get First five goods
      </button>

      <button
        type="button"
        onClick={() => getAllGoods(getRedGoods)}
      >
        Get Red Goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
