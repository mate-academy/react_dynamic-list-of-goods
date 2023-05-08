import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoading = (loadingTypeFunction: () => Promise<Good[]>) => {
    loadingTypeFunction()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const errorText = errorMessage && (
    <p style={{ color: 'red' }}>
      {errorMessage}
    </p>
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoading(getAll)}
      >
        Load all goods
      </button>
      {errorText}

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoading(get5First)}
      >
        Load 5 first goods
      </button>
      {errorText}

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoading(getRedGoods)}
      >
        Load red goods
      </button>
      {errorText}

      <GoodsList goods={goods} />
    </div>
  );
};
