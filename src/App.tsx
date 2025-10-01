import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleErrors = () => {
    setIsLoading(true);
    getAll()
      .then((data: Good[]) => {
        setGoods(data);
      })
      .catch(() => setError('Try again later'))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {isLoading && <p> ... </p>}

      {!isLoading && (
        <>
          <button
            onClick={() => {
              handleErrors();
            }}
            type="button"
            data-cy="all-button"
          >
            Load all goods
          </button>

          <button
            onClick={() => {
              get5First().then((data: Good[]) => {
                setGoods(data);
              });
            }}
            type="button"
            data-cy="first-five-button"
          >
            Load 5 first goods
          </button>

          <button
            onClick={() => {
              getRedGoods().then((data: Good[]) => {
                setGoods(data);
              });
            }}
            type="button"
            data-cy="red-button"
          >
            Load red goods
          </button>
        </>
      )}

      {error && <p>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
