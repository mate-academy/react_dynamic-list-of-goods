import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

type User = {
  id: number;
  name: string;
  color: string;
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState([]);

  const handleLoadAllGoods = () => {
    fetch('http://localhost:3000/api/goods.json')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setGoods(users);
      });
  };

  const handleLoad5Goods = () => {
    fetch('http://localhost:3000/api/goods.json')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setGoods(users.filter((user: User) => user.id <= 5));
      });
  };

  const handleLoadRedGoods = () => {
    fetch('http://localhost:3000/api/goods.json')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setGoods(users.filter((user: User) => user.color === 'red'));
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5Goods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
