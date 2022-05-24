import React, { useState } from 'react';
import './App.scss';
import { GoodList } from './components/GoodsList/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const get5Goods = async () => {
    const fiveGoods = await get5First();

    setGoods(fiveGoods);
  };

  const getRed = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <>
      <h1 className="title">Dynamic list of Goods</h1>
      <div className="buttons-wrapper">
        <button
          className="button"
          type="button"
          onClick={getAllGoods}
        >
          All goods
        </button>
        <button
          type="button"
          className="button"
          onClick={get5Goods}
        >
          5 first goods
        </button>
        <button
          type="button"
          className="button"
          onClick={getRed}
        >
          Red goods
        </button>
      </div>
      <GoodList goods={goods} />
    </>
  );
};

export default App;
