import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const loadedAllGoods = await getAll();

    setGoods(loadedAllGoods);
  };

  const loadFirst5Goods = async () => {
    const loadedFirst5Goods = await get5First();

    setGoods(loadedFirst5Goods);
  };

  const loadRedGoods = async () => {
    const loadedRedGoods = await getRedGoods();

    setGoods(loadedRedGoods);
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
