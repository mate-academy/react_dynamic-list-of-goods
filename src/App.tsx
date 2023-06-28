import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleShowAllGoods = async () => {
    setGoods(await getAll());
  };

  const handleShow5FirstGoods = async () => {
    setGoods(await get5First());
  };

  const handleShowRedGoods = async () => {
    setGoods(await getRedGoods());
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        className="button is-black"
        type="button"
        data-cy="all-button"
        onClick={handleShowAllGoods}
      >
        Load all goods
      </button>

      <button
        className="button is-black"
        type="button"
        data-cy="first-five-button"
        onClick={handleShow5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-danger"
        type="button"
        data-cy="red-button"
        onClick={handleShowRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
