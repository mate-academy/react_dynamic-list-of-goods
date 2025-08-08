import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadAllGoods = () => {
    setError(null); // Очищаємо попередні помилки перед новим запитом
    goodsAPI
      .getAll()
      .then(loadedGoods => {
        setGoods(loadedGoods);
      })
      .catch(err => {
        // Змінюємо назву змінної на 'err' для ясності
        // Встановлюємо повідомлення про помилку
        setError(err.message || 'Failed to load all goods');
        setGoods([]); // Очищаємо список товарів у випадку помилки
      });
  };

  // Функція для завантаження перших 5 товарів
  const load5FirstGoods = () => {
    setError(null); // Очищаємо попередні помилки
    goodsAPI
      .get5First()
      .then(loadedGoods => {
        setGoods(loadedGoods);
      })
      .catch(err => {
        setError(err.message || 'Failed to load 5 first goods');
        setGoods([]);
      });
  };

  // Функція для завантаження червоних товарів
  const loadRedGoods = () => {
    setError(null); // Очищаємо попередні помилки
    goodsAPI
      .getRedGoods()
      .then(loadedGoods => {
        setGoods(loadedGoods);
      })
      .catch(err => {
        setError(err.message || 'Failed to load red goods');
        setGoods([]);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>
      {error && <p className="error-message">{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
