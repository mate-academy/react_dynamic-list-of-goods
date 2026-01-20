import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const loadGoods = (fetchFunction: () => Promise<Good[]>) => {
    setErrorMessage('');
    fetchFunction()
      .then(newGoods => {
        setGoods(currentGoods => {
          if (newGoods.length !== currentGoods.length) {
            return newGoods;
          }

          const isSameData = currentGoods.every((good, index) => {
            return good.id === newGoods[index].id;
          });

          if (isSameData) {
            return currentGoods;
          }

          return newGoods;
        });
      })
      .catch(error => {
        setErrorMessage(`Error: ${error}`);
      });
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

      {errorMessage && (
        <p className="has-text-danger" data-cy="error-message">
          {errorMessage}
        </p>
      )}

      {!errorMessage && <GoodsList goods={goods} />}
    </div>
  );
};
