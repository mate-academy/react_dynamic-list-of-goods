import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type FetchGoodFunction = () => Promise<Good[]>;

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = async (fetchGoodFunction: FetchGoodFunction) => {
    const response = await fetchGoodFunction();

    setGoods(response);
  };

  return (
    <main className="App">
      <button type="button" onClick={() => getGoods(getAll)}>
        All
      </button>
      <button
        type="button"
        onClick={() => getGoods(get5First)}
      >
        5
      </button>
      <button
        type="button"
        onClick={() => getGoods(getRedGoods)}
      >
        Red
      </button>

      <GoodsList goods={goods} />
    </main>
  );
};

export default App;
