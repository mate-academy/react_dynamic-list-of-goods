import React, { useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadAllGoods = () => {
    setIsLoading(true);
    setErrorMessage('');

    getAll()
      .then(setGoods)
      .catch(() => {
        setErrorMessage('Failed to load goods');
        setGoods([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const load5FirstGoods = () => {
    setIsLoading(true);
    setErrorMessage('');

    get5First()
      .then(setGoods)
      .catch(() => {
        setErrorMessage('Failed to load goods');
        setGoods([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loadRedGoods = () => {
    setIsLoading(true);
    setErrorMessage('');

    getRedGoods()
      .then(setGoods)
      .catch(() => {
        setErrorMessage('Failed to load goods');
        setGoods([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      {isLoading && <p>Loading...</p>}

      {errorMessage && (
        <p className="has-text-danger" data-cy="errorMessage">
          {errorMessage}
        </p>
      )}

      {!isLoading && <GoodsList goods={goods} />}
    </div>
  );
};
