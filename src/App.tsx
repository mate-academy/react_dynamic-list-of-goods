import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [post, setPost] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLoadGoods = async (loadFunction: () => Promise<Good[]>) => {
    setErrorMessage(''); // Очищуємо попередню помилку
    setLoading(true); // Показуємо лоадер

    try {
      const goods = await loadFunction();

      setPost(goods);
    } catch (error) {
      setErrorMessage('Try again later');
    } finally {
      setLoading(false); // Ховаємо лоадер
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadGoods(getAll)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load all goods'}
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadGoods(get5First)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load 5 first goods'}
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadGoods(getRedGoods)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load red goods'}
      </button>

      {errorMessage && (
        <div style={{ color: 'red', margin: '10px 0' }}>{errorMessage}</div>
      )}

      <GoodsList goods={post} />
    </div>
  );
};
