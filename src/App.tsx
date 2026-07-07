import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
// Імпортуємо наші функції для роботи з API товарів
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  // Початковий стан — порожній масив, запит при старті не робимо
  const [goods, setGoods] = useState<Good[]>([]);

  // Обробник для завантаження всіх товарів
  const handleLoadAll = () => {
    getAll().then(data => setGoods(data));
  };

  // Обробник для завантаження перших 5 відсортованих товарів
  const handleLoadFirstFive = () => {
    get5First().then(data => setGoods(data));
  };

  // Обробник для завантаження тільки червоних товарів
  const handleLoadRedGoods = () => {
    getRedGoods().then(data => setGoods(data));
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

      <GoodsList goods={goods} />
    </div>
  );
};
