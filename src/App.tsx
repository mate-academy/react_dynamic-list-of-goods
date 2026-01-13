import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  // Використовуємо useCallback, щоб функції не перестворювалися
  const handleLoadAll = useCallback(() => {
    setHasError(false);
    getAll()
      .then(setGoods)
      .catch(() => setHasError(true));
  }, []);

  const handleLoad5First = useCallback(() => {
    setHasError(false);
    get5First()
      .then(setGoods)
      .catch(() => setHasError(true));
  }, []);

  const handleLoadRedOnly = useCallback(() => {
    setHasError(false);
    getRedGoods()
      .then(setGoods)
      .catch(() => setHasError(true));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button type="button" onClick={handleLoadAll}>
          Load all goods
        </button>
        <button type="button" onClick={handleLoad5First}>
          Load 5 first goods
        </button>
        <button type="button" onClick={handleLoadRedOnly}>
          Load red goods
        </button>
      </div>

      {hasError && (
        <p className="notification is-danger">Something went wrong!</p>
      )}

      {/* Передаємо наш стан goods */}
      <GoodsList goods={goods} />
    </div>
  );
};
