import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadAllGoods = () => {
    setLoading(true);
    getAll()
      .then((data: Good[]) => setGoods(data))
      .catch(error => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  };

  const load5FirstGoods = () => {
    setLoading(true);
    get5First()
      .then((data: Good[]) => setGoods(data))
      .catch(error => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  };

  const loadRedGoods = () => {
    setLoading(true);
    getRed()
      .then((data: Good[]) => setGoods(data))
      .catch(error => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
        disabled={loading}
      >
        Load red goods
      </button>

      {!loading && !errorMessage && <GoodsList goods={goods} />}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
