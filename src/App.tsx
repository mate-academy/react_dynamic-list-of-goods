import './App.scss';
import React, { useState } from 'react';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (isLoading: () => Promise<Good[]>) => {
    setGoods(await isLoading());
  };

  return (
    <div className="App container">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-success is-outlined is-rounded"
        onClick={() => handleClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-link is-outlined is-rounded"
        onClick={() => handleClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger is-outlined is-rounded"
        onClick={() => handleClick(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
