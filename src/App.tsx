import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const loadData = (request: () => Promise<Good[]>) => {
    setLoading(true);
    setErrorMessage('');

    request()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later'))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadData(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadData(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadData(getRed)}
      >
        Load red goods
      </button>

      {loading && <p>Loading...</p>}

      {!loading && goods.length > 0 && <GoodsList goods={goods} />}

      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};
