import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  // Створюємо стан для зберігання повідомлення про помилку мережі
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Спільна функція для скидання помилки перед новим запитом
  const startLoading = () => {
    setErrorMessage(null);
  };

  // Обробник для завантаження всіх товарів
  const handleLoadAll = () => {
    startLoading();
    getAll()
      .then(data => setGoods(data))
      // Перехоплюємо помилку, якщо запит зазнав невдачі
      .catch((error: Error) => setErrorMessage(error.message));
  };

  // Обробник для завантаження перших 5 товарів
  const handleLoadFirstFive = () => {
    startLoading();
    get5First()
      .then(data => setGoods(data))
      // Перехоплюємо помилку сортування чи запиту
      .catch((error: Error) => setErrorMessage(error.message));
  };

  // Обробник для завантаження тільки червоних товарів
  const handleLoadRedGoods = () => {
    startLoading();
    getRedGoods()
      .then(data => setGoods(data))
      // Перехоплюємо помилку фільтрації чи запиту
      .catch((error: Error) => setErrorMessage(error.message));
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

      {/* Якщо є помилка, виводимо її користувачеві */}
      {errorMessage && (
        <p className="error" style={{ color: 'red' }}>
          {errorMessage}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
