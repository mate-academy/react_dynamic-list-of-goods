import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { GoodsLoader } from './components/GoodsLoader';

export const App: React.FC = () => {
  const [activated, setActivated] = useState<boolean>(false);
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleShowAll = () => {
    setLoading(true);

    getAll()
      .then(data => {
        if (data.length === 0) {
          setIsError(true);
          return;
        }

        setGoods(data);
      })
      .finally(() => setLoading(false));

    setActivated(true);
  };

  const handleShowFirstFive = () => {
    setLoading(true);

    get5First()
      .then(data => {
        if (data.length === 0) {
          setIsError(true);
        }
        setGoods(data);
      })
      .finally(() => setLoading(false));

    setActivated(true);
  };

  const handleShowRedOne = () => {
    setLoading(true);

    getRedGoods()
      .then(data => {
        if (data.length === 0) {
          setIsError(true);
          return;
        }
        setGoods(data);
      })
      .finally(() => setLoading(false));

    setActivated(true);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleShowAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleShowFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleShowRedOne}>
        Load red goods
      </button>
      {loading && !isError && <GoodsLoader />}
      {isError && <h2>Something went wrong...</h2>}
      {!loading && activated && !isError && <GoodsList goods={goods} />}
    </div>
  );
};
