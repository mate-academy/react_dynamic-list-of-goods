import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadGoods = (parametr: () => Promise<Good[]>) => {
    setIsLoading(true);
    setErrorMessage('');
    parametr()
      .then(setGoods)
      .catch(() => setErrorMessage('Error!'))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {isLoading && <p>Loading...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      {!isLoading && goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
