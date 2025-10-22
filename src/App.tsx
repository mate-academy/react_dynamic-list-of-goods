import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = (loader: () => Promise<Good[]>) => {
    setLoading(true);
    setErrorMessage('');
    loader()
      .then(setGoods)
      .catch(() => setErrorMessage('Failed to load goods'))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {loading && <p>Loading...</p>}

      {errorMessage && (
        <div className="notification is-danger">
          <p>{errorMessage}</p>
          <button onClick={() => loadGoods(getAll)}>Retry</button>
        </div>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
