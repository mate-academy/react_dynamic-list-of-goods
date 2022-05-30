import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (f: () => Promise<Good[]>) => {
    const good = await f();

    setGoods(good);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button type="button" onClick={() => handleClick(getAll)}>
        Load All goods
      </button>

      <button type="button" onClick={() => handleClick(get5First)}>
        Load 5 first goods
      </button>

      <button type="button" onClick={() => handleClick(getRedGoods)}>
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
