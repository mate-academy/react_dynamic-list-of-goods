import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll().then(setGoods); // Загрузка всех товаров
  };

  const handleLoad5First = () => {
    get5First().then(setGoods); // Загрузка первых 5 товаров
  };

  const handleLoadRed = () => {
    getRedGoods().then(setGoods); // Загрузка только красных товаров
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
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {goods && <GoodsList goods={goods} />}
    </div>
  );
};
