import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  const [error, setError] = React.useState<string | null>(null);

  const handleLoadAll = React.useCallback(() => {
    setError(null);
    getAll()
      .then(setGoods)
      .catch(err => {
        setGoods([]);
        setError(err.message || 'Failed to load goods');
      });
  }, []);

  const handleLoad5First = React.useCallback(() => {
    setError(null);
    get5First()
      .then(setGoods)
      .catch(err => {
        setGoods([]);
        setError(err.message || 'Failed to load goods');
      });
  }, []);

  const handleLoadRed = React.useCallback(() => {
    setError(null);
    getRedGoods()
      .then(setGoods)
      .catch(err => {
        setGoods([]);
        setError(err.message || 'Failed to load goods');
      });
  }, []);

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
        <div
          className="App__error"
          style={{ color: 'red', margin: '1em 0' }}
          data-cy="error-message"
        >
          {error}
        </div>
      )}
      <GoodsList goods={goods} />
    </div>
  );
};
