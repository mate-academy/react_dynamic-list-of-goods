import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
// Імпортуємо функції з нашої бібліотеки запитів
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  // Стан для відстеження помилок завантаження даних
  const [hasError, setHasError] = useState<boolean>(false);

  // Допоміжна функція перед початком кожного нового запиту
  const resetState = () => {
    setHasError(false);
  };

  const handleLoadAll = () => {
    resetState();
    getAll()
      .then(data => setGoods(data))
      // Додаємо обов'язкову обробку помилок для першої кнопки
      .catch(() => setHasError(true));
  };

  const handleLoadFirstFive = () => {
    resetState();
    get5First()
      .then(data => setGoods(data))
      // Додаємо обов'язкову обробку помилок для другої кнопки
      .catch(() => setHasError(true));
  };

  const handleLoadRedGoods = () => {
    resetState();
    getRedGoods()
      .then(data => setGoods(data))
      // Додаємо обов'язкову обробку помилок для третьої кнопки
      .catch(() => setHasError(true));
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

      {/* Якщо сталася помилка сервера, показуємо безпечне повідомлення користувачу */}
      {hasError && <p className="error">Something went wrong...</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
