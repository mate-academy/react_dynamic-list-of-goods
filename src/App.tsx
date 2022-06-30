import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const loadedGoods = await getAll();

    setGoods(loadedGoods);
  };

  const loadFirst5Goods = async () => {
    const loadedGoods = await get5First();

    setGoods(loadedGoods);
  };

  const loadRedGoods = async () => {
    const loadedGoods = await getRed();

    setGoods(loadedGoods);
  };

  return (
    <div className="container">
      <h1 className="title">Dynamic list of Goods</h1>

      <div>
        <button
          type="button"
          className="button"
          onClick={() => loadAllGoods()}
        >
          All
        </button>

        <button
          type="button"
          className="button"
          onClick={() => loadFirst5Goods()}
        >
          5
        </button>

        <button
          type="button"
          className="button"
          onClick={() => loadRedGoods()}
        >
          Select Red
        </button>
      </div>

      <div>
        <GoodsList goods={goods} />
      </div>
    </div>
  );
};

export default App;
