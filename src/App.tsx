import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [user, setUser] = useState<Good[]>([]);

  const handleAllUsers = async () => {
    const goodsArray = await goodsAPI.getAll();

    setUser(goodsArray);
  };

  const handleFiveUsers = async () => {
    const goodsArray = await goodsAPI.get5First();

    setUser(goodsArray);
  };

  const handleRedUsers = async () => {
    const goodsArray = await goodsAPI.getRedGoods();

    setUser(goodsArray);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllUsers}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveUsers}

      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedUsers}
      >
        Load red goods
      </button>

      <GoodsList goods={user} />
    </div>
  );
};
