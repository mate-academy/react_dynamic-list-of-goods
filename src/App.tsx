import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAllGoods = async () => {
    const goodsList = await getAll();

    setGoods(goodsList);
  };

  const showFiveGoods = async () => {
    const goodsFive = await get5First();

    setGoods(goodsFive);
  };

  const showRedGoods = async () => {
    const goodsRed = await getRed();

    setGoods(goodsRed);
  };

  return (
    <div className="app">
      <GoodsList goods={goods} />

      <div className="app__buttons">
        <button
          type="button"
          className="app__buttons--button"
          onClick={showAllGoods}
        >
          Show all goods
        </button>

        <button
          type="button"
          className="app__buttons--button"
          onClick={showFiveGoods}
        >
          Show five goods
        </button>

        <button
          type="button"
          className="app__buttons--button"
          onClick={showRedGoods}
        >
          Show red goods
        </button>
      </div>
    </div>
  );
};

export default App;
