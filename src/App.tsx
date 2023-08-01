import React, { useEffect, useState } from 'react';

import './App.scss';

import { GoodsList } from './GoodsList';

import {
  get5First,
  getAll,
  getRedGoods,
} from './api/goods';
import { Good } from './types/Good';
import { Status } from './service/Status';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filter, setFilter] = useState(Status.ALL);

  useEffect(() => {
    getAll().then(setGoods);
  }, []);

  const handleButtonClick = (status: Status): void => {
    if (status === filter) {
      return;
    }

    setFilter(status);

    switch (status) {
      case Status.ALL:
        getAll().then(setGoods);
        break;

      case Status.FIRST5:
        get5First().then(setGoods);
        break;

      case Status.RED:
        getRedGoods().then(setGoods);
        break;

      default:
        getAll().then(setGoods);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleButtonClick(Status.ALL);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleButtonClick(Status.FIRST5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleButtonClick(Status.RED)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
