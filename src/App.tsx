import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [listOfUsers, setListOfUsers] = useState<Good[]>([]);

  const hendlerClick = async (whatToShow: string) => {
    switch (whatToShow) {
      case 'ShowAll':
        setListOfUsers(await getAll());
        break;

      case 'ShowFirst5':
        setListOfUsers(await get5First());
        break;

      case 'ShowAllRed':
        setListOfUsers(await getRedGoods());
        break;

      default:
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => hendlerClick('ShowAll')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => hendlerClick('ShowFirst5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => hendlerClick('ShowAllRed')}
      >
        Load red goods
      </button>

      <GoodsList goods={listOfUsers} />
    </div>
  );
};
