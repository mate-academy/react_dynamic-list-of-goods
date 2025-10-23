import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [error, setError] = React.useState<string>('');

  const handleLoadAll = () => {
    setError('');
    getAll()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load goods');
      });
  };

  const handleLoad5First = () => {
    setError('');
    get5First()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load 5 first goods');
      });
  };

  const handleLoadRed = () => {
    setError('');
    getRedGoods()
      .then(setGoods)
      .catch(() => {
        setError('Failed to load red goods');
      });
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

      {error && (
        <p style={{ color: 'red' }} data-cy="error">
          {error}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
