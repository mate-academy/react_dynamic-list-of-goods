import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAllGoods, getRedGoods } from './api/goods';
import { Good } from './types/Good';

type FetchType = 'all' | 'firstFive' | 'red';

export const App: React.FC = () => {
  const [list, setList] = useState<Good[]>([]);

  const onFilterClick = async (type: FetchType) => {
    switch (type) {
      case 'all':
        setList(await getAllGoods());
        break;
      case 'firstFive':
        setList(await get5First());
        break;
      case 'red':
        setList(await getRedGoods());
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => onFilterClick('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => onFilterClick('firstFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => onFilterClick('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={list} />
    </div>
  );
};
