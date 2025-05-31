import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [apiQuery, setQuery] = useState<() => Promise<Good[]>>(() => getAll);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    apiQuery()
      .then(setGoods)
      .catch(error => setErrorMessage(error.toString()));
  }, [apiQuery]);

  const handleGetAll = () => setQuery(() => getAll);
  const handleGet5First = () => setQuery(() => get5First);
  const handleGetRedGoods = () => setQuery(() => getRedGoods);

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

      {errorMessage ? <p>{errorMessage}</p> : <GoodsList goods={goods} />}
    </div>
  );
};
