// App.tsx
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = () => {
    setIsLoading(true);
    setError(null);
    getAll()
      .then(setGoods)
      .catch(() => setError('Не вдалося завантажити товари'))
      .finally(() => setIsLoading(false));
  };

  const handleLoadFirstFive = () => {
    setIsLoading(true);
    setError(null);
    get5First()
      .then(setGoods)
      .catch(() => setError('Не вдалося завантажити перші 5 товарів'))
      .finally(() => setIsLoading(false));
  };

  const handleLoadRed = () => {
    setIsLoading(true);
    setError(null);
    getRedGoods()
      .then(setGoods)
      .catch(() => setError('Не вдалося завантажити червоні товари'))
      .finally(() => setIsLoading(false));
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

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
