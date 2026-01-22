import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [type, setType] = useState('all');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);

    switch (type) {
      case 'firstFive':
        get5First()
          .then(setGoods)
          .catch(err => {
            const message = err instanceof Error ? err.message : String(err);
            
            setError(`During get first 5: ${message}`);
          });
        break;
      case 'onlyRed':
        getRedGoods()
          .then(setGoods)
          .catch(err => {
            const message = err instanceof Error ? err.message : String(err);

            setError(`During get red: ${message}`);
          });
        break;
      default:
        getAll()
          .then(setGoods)
          .catch(err => {
            const message = err instanceof Error ? err.message : String(err);

            setError(`During get all: ${message}`);
          });
    }
  }, [type]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setType('all');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setType('firstFive');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setType('onlyRed');
        }}
      >
        Load red goods
      </button>

      {error && <p data-cy="goods-error">{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};
