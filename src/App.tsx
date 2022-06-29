import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

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
    const loadedGoods = await getRedGoods();

    setGoods(loadedGoods);
  };

  return (
    <div>
      <h1 className="title">Dynamic list of Goods</h1>
      <div>
        <button
          type="button"
          className="button"
          onClick={() => loadAllGoods()}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => loadFirst5Goods()}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => loadRedGoods()}
        >
          Load Red goods
        </button>
      </div>

      <div>
        <GoodsList goods={goods} />
      </div>
    </div>
  );
};

export default App;
