import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  // Обробка помилок: просто очищаємо список, якщо fetch не вдався
  const loadAllGoods = () => {
    getAll()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  const loadFirstFive = () => {
    get5First()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  const loadRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
