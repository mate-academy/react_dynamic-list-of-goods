import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = async () => {
    try {
      const data = await goodsAPI.getAll();

      setGoods(data);
      setError(null);
    } catch (e) {
      setError('Не вдалося завантажити всі товари 😢');
    }
  };

  const handleLoad5First = async () => {
    try {
      const data = await goodsAPI.get5First();

      setGoods(data);
      setError(null);
    } catch (e) {
      setError('Не вдалося завантажити перші 5 товарів 😢');
    }
  };

  const handleRedGoods = async () => {
    try {
      const data = await goodsAPI.getRedGoods();

      setGoods(data);
      setError(null);
    } catch (e) {
      setError('Не вдалося завантажити червоні товари 😢');
    }
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

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>
      {error && <p className="App__error">{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
