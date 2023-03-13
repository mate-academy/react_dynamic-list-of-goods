import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

enum Sort {
  All,
  FirstFive,
  Red,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sort, setSort] = useState<Sort>();

  const handleClick = async (promise: Promise<Good[]>) => {
    setGoods(await promise);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          if (sort !== Sort.All) {
            setSort(Sort.All);
            handleClick(getAll());
          }
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          if (sort !== Sort.FirstFive) {
            setSort(Sort.FirstFive);
            handleClick(get5First());
          }
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          if (sort !== Sort.Red) {
            setSort(Sort.Red);
            handleClick(getRedGoods());
          }
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
