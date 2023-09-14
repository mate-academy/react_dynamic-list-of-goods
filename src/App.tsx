/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getAll()
      .then((data) => {
        setGoods(data);
      })
      .catch((error) => {
        console.error('Something went wrong! Please reload page!', error);
      });
  };

  const loadFirstFive = () => {
    get5First()
      .then((data) => {
        setGoods(data);
      })
      .catch((error) => {
        console.error('Something went wrong! Please reload page!', error);
      });
  };

  const loadRed = () => {
    getRedGoods()
      .then((data) => {
        return setGoods(data);
      })
      .catch((error) => {
        console.error('Something went wrong! Please reload page!', error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
