import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibilityGoods, setVisibilityGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string>('');

  const showAll = async () => {
    try {
      const good: Good[] = await getAll();

      setVisibilityGoods(good);
    } catch {
      setVisibilityGoods([]);
      setError('impossible show all goods, please try again');
    }
  };

  const show5First = async () => {
    try {
      const good: Good[] = await get5First();

      setVisibilityGoods(good);
    } catch {
      setVisibilityGoods([]);
      setError('impossible show first five goods, please try again');
    }
  };

  const ShowRedGoods = async () => {
    try {
      const good: Good[] = await getRedGoods();

      setVisibilityGoods(good);
    } catch {
      setVisibilityGoods([]);
      setError('impossible show goods with red color, please try again');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={showAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={show5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={ShowRedGoods}
      >
        Load red goods
      </button>
      <GoodsList goods={visibilityGoods} />
      <strong>{error}</strong>
    </div>
  );
};
