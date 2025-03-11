import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type Good = {
  id: number;
  name: string;
  color: string;
};

type Filter = 'all' | 'fiveFirst' | 'red';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const updateList = (list: Good[]) => setGoodsList(list);

  const handleClick = (filter: Filter): void => {
    switch (filter) {
      case 'all':
        getAll().then(updateList);
        break;
      case 'fiveFirst':
        get5First().then(updateList);
        break;
      case 'red':
        getRedGoods().then(updateList);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick('fiveFirst')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
