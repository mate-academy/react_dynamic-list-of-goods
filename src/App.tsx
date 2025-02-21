/* eslint-disable */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll()
      .then(setGoods)
      .catch(error =>
        console.error('Помилка завантаження всіх товарів:', error),
      );
  };

  const handleLoadFirstFive = () => {
    get5First()
      .then(setGoods)
      .catch(error =>
        console.error('Помилка завантаження перших 5 товарів:', error),
      );
  };

  const handleLoadRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error =>
        console.error('Помилка завантаження червоних товарів:', error),
      );
  };

  return (
    <div className="App">
      <h1>Динамічний список товарів</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Завантажити всі товари
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Завантажити 5 перших товарів
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Завантажити червоні товари
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
