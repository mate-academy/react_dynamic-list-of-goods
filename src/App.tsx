import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleButton = (getGoods: ()=>Promise<Good[]>) => {
    getGoods()
      .then(recievedGoods => setGoods(recievedGoods));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => handleButton(getAll)}
      >
        Load All goods
      </button>

      <button
        type="button"
        onClick={() => handleButton(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => handleButton(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

    </>
  );
};

export default App;
