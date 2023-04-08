import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setgoods] = useState<Good[]>([]);

  const showAll = async () => {
    const initialGoods = await getAll();

    setgoods(initialGoods);
  };

  const show5First = async () => {
    const initialGoods = await get5First();

    setgoods(initialGoods);
  };

  const showRedOnly = async () => {
    const initialGoods = await getRedGoods();

    setgoods(initialGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={showAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={show5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={showRedOnly}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
