import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  // Стан для збереження тексту помилки
  const [errorMessage, setErrorMessage] = useState('');

  // Створюємо універсальну функцію для завантаження, щоб не дублювати код
  const loadData = (fetchMethod: () => Promise<Good[]>) => {
    setErrorMessage(''); // Очищаємо попередню помилку перед новим запитом

    fetchMethod()
      .then(setGoods)
      .catch(() => {
        // Якщо сталася помилка, записуємо її в стан
        setErrorMessage('Упс! Не вдалося завантажити товари.');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {/* Відображаємо помилку, якщо вона є */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadData(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadData(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadData(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
