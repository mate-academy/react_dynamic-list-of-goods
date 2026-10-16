import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isError, setIsError] = useState<string>('');

  const reject = (request: () => Promise<Good[]>) => {
    setIsError('');

    request()
      .then(setGoods)
      .catch(() => setIsError('Unable to load goods'));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => reject(getAll)}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => reject(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => reject(getRedGoods)}
      >
        Load red goods
      </button>

      {isError && <p>{isError}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
