import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { useState } from 'react';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [error, setError] = useState<string | unknown>('');

  const handleGetAll = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      setGoods(await getAll());
    } catch (errorWrapper) {
      setError(errorWrapper);

      return <p>{error}</p>;
    }
  };

  const handleGet5First = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      setGoods(await get5First());
    } catch (errorWrapper) {
      setError(errorWrapper);

      return <p>{error}</p>;
    }
  };

  const handleGetRedGoods = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      setGoods(await getRedGoods());
    } catch (errorWrapper) {
      setError(errorWrapper);

      return <p>{error}</p>;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handleGetAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={handleGet5First}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={handleGetRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
