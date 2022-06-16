import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type Callback = () => Promise<Good[]>;

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGood = (currentFunction: Callback) => {
    currentFunction()
      .then(currentGoods => setGoods(currentGoods));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <GoodsList goods={goods} />
      <button
        type="submit"
        onClick={() => getGood(getAll)}
      >
        All
      </button>
      <button
        type="submit"
        onClick={() => getGood(get5First)}
      >
        5
      </button>
      <button
        type="submit"
        onClick={() => getGood(getRedGoods)}
      >
        red
      </button>
    </>
  );
};

export default App;
