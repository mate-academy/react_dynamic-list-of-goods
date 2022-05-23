import React, { useState } from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList/GoodsList';

import { getAllGoods, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAll = async () => {
    const allGoods = await getAllGoods();

    setGoods(allGoods);
  };

  const getFiveFirst = async () => {
    const firstFive = await get5First();

    setGoods(firstFive);
  };

  const getRed = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="app">
      <div className="app__buttons">
        <button
          type="button"
          className="app__button"
          onClick={getAll}
        >
          Get all goods
        </button>
        <button
          type="button"
          className="app__button"
          onClick={getFiveFirst}
        >
          Get five first goods
        </button>
        <button
          type="button"
          className="app__button"
          onClick={getRed}
        >
          Get red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
