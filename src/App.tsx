import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = (request: Promise<Good[]>, errorText: string) => {
    setErrorMessage('');

    request.then(setGoods).catch(() => setErrorMessage(errorText));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll(), 'Failed to load all goods')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First(), 'Failed to load 5 first goods')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods(), 'Failed to load red goods')}
      >
        Load red goods
      </button>

      {errorMessage && <p>{errorMessage}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
