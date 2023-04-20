import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const handleClick = async (
    { currentTarget }: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const { name } = currentTarget;

    switch (name) {
      case 'Load-all-goods':
        getAll()
          .then((result: Good[]) => setGoods(result));
        break;
      case 'first-five-goods':
        get5First()
          .then((result: Good[]) => setGoods(result));
        break;
      case 'load-red-goods':
        getRedGoods()
          .then((result: Good[]) => setGoods(result));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {getAll}

      <button
        type="button"
        name="Load-all-goods"
        data-cy="all-button"
        onClick={handleClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        name="first-five-goods"
        data-cy="first-five-button"
        onClick={handleClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        name="load-red-goods"
        data-cy="red-button"
        onClick={handleClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
