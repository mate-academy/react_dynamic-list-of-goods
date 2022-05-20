import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const addAll = async () => {
    const allGoods: Good[] = await getAll();

    setGoods(allGoods);
  };

  const add5goods = async () => {
    const fiveGoods: Good[] = await get5First();

    setGoods(fiveGoods);
  };

  const addRed = async () => {
    const redGoods: Good[] = await getRed();

    setGoods(redGoods);
  };

  return (
    <div className="app">
      <h1 className="app__title">Dynamic list of Goods</h1>

      <button type="button" className="app__button" onClick={addAll}>
        Show All
      </button>

      <button type="button" className="app__button" onClick={add5goods}>
        Show 5 First
      </button>

      <button type="button" className="app__button" onClick={addRed}>
        Show Red Goods
      </button>

      {goods.length > 0
      && <GoodsList goods={goods} />}
    </div>
  );
};
