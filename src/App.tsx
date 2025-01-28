import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState([]);

  const handleLoadAll = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const handleLoadFirstFive = async () => {
    const firstFiveGoods = await get5First();

    setGoods(firstFiveGoods);
  };

  const handleLoadRedGoods = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>
      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>
      <GoodsList goods={goods} /> {/* Передаємо стан goods у компонент */}
    </div>
  );
};
