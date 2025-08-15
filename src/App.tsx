import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string>('');

  const handleLoadAll = async () => {
    try {
      setError('');
      const data = await getAll();

      setGoods(data);
    } catch (err) {
      setError('Network response was not ok');
    }
  };

  const handleLoad5First = async () => {
    try {
      setGoods([]);
      const data = await get5First();

      setGoods(data);
    } catch (err) {
      setError('Network response was not ok');
    }
  };

  const handleLoadRed = async () => {
    try {
      setGoods([]);
      const data = await getRedGoods();

      setGoods(data);
    } catch (err) {
      setError('Network response was not ok');
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

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
