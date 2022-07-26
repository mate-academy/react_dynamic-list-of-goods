import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import 'bulma';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | []>([]);

  const loadUsers = async (preparedGoods: () => Promise<Good[]>) => {
    const goodsFromServer = await preparedGoods();

    setGoods(goodsFromServer);
  };

  return (
    <div className="App">
      <h1 className="title has-text-centered">
        Dynamic list of Goods
      </h1>

      <div className="container has-text-centered">
        <button
          type="button"
          className="button is-success block mr-5"
          data-cy="all-button"
          onClick={() => loadUsers(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button is-warning block"
          data-cy="first-five-button"
          onClick={() => loadUsers(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-danger block ml-5"
          data-cy="red-button"
          onClick={() => loadUsers(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    </div>
  );
};
