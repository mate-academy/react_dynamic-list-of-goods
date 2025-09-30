import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllGoods = () => {
    setLoading(true);
    getAll()
      .then(data => {
        setGoods(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setLoading(false));
  };

  const getFirtsFive = () => {
    setLoading(true);
    get5First()
      .then(data => {
        setGoods(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setLoading(false));
  };

  const getRedOne = () => {
    setLoading(true);
    getRedGoods()
      .then(data => {
        setGoods(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={getFirtsFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedOne}>
        Load red goods
      </button>

      {loading && <h2>Loading...</h2>}
      {!loading && !isError && <GoodsList goods={goods} />}
      {isError && <h3>Something went wrong...</h3>}
    </div>
  );
};
