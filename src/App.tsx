import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchGoods = (type: string) => {
    switch (type) {
      case 'All':
        return getAll()
          .then(data => setGoods(data))
          .catch(() => setError('Try again later'));
      case 'Five':
        return get5First()
          .then(data => setGoods(data))
          .catch(() => setError('Failed to load first 5 goods'));
      case 'Red':
        return getRedGoods()
          .then(data => setGoods(data))
          .catch(() => setError('Failed to load red goods'));
      default:
        return [];
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => fetchGoods('All')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => fetchGoods('Five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => fetchGoods('Red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {error && <p>{error}</p>}
    </div>
  );
};
