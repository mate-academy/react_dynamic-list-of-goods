import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, getVisibleGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');
  const errorMessage = 'Помилка при завантаженні';

  const onClick = (callback: () => Promise<Good[]>) => {
    callback()
      .then(getVisibleGoods)
      .catch(() => setError(errorMessage));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => onClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => onClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => onClick(getRedGoods)}
      >
        Load red goods
      </button>

      {!error ? (
        <GoodsList goods={visibleGoods} />
      ) : (
        <p style={{ color: 'red' }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};
