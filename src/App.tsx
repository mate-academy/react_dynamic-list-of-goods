import React from 'react';
import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';

type Good = {
  id: number;
  name: string;
  color: string;
};

export const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [goods, setGoods] = React.useState<Good[]>([]);

  function handleLoadAll(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    event.preventDefault();

    setLoading(true);
    setErrorMessage('');
    getAll()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  }

  function handleLoadRed(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');
    getRed()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  }

  function handleLoadFirstFive(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');
    get5First()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {loading && <p>Loading...</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      {!errorMessage && !loading && <GoodsList goods={goods} />}
    </div>
  );
};
