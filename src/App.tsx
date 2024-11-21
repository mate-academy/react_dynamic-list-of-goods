import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isAll, setIsAll] = useState<boolean>(false);
  const [isFirstFive, setIsFirstFive] = useState<boolean>(false);
  const [isRed, setIsRed] = useState<boolean>(false);

  useEffect(() => {
    if (isAll) {
      getAll().then(setGoods);
    }

    if (isRed) {
      getRedGoods().then(setGoods);
    }

    if (isFirstFive) {
      get5First().then(setGoods);
    }

    return () => {
      setIsAll(false);
      setIsFirstFive(false);
      setIsRed(false);
    };
  }, [isAll, isFirstFive, isRed]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={() => setIsAll(true)} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button
        onClick={() => setIsFirstFive(true)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button onClick={() => setIsRed(true)} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
