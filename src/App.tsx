import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [error, setError] = React.useState('');

  const handleLoadAll = () => {
    setError('');
    getAll()
      .then(setGoods)
      .catch(err => setError(String(err.message || err)));
  };

  const handleLoadFive = () => {
    setError('');
    get5First()
      .then(setGoods)
      .catch(err => setError(String(err.message || err)));
  };

  const handleLoadRed = () => {
    setError('');
    getRedGoods()
      .then(setGoods)
      .catch(err => setError(String(err.message || err)));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadAll()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadFive()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadRed()}
      >
        Load red goods
      </button>
      {error === '' ? <GoodsList goods={goods} /> : <p>{error}</p>}
    </div>
  );
};
