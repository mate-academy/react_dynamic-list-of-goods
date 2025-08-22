import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = (apiFunction: () => Promise<Good[]>) => {
    setLoading(true);
    setErrorMessage(''); 

    apiFunction()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load all goods'}
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load 5 first goods'}
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load red goods'}
      </button>

      {errorMessage && (
        <div style={{ color: 'red', margin: '10px 0' }}>
          Error: {errorMessage}
        </div>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
