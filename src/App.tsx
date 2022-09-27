import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
import 'bulma/css/bulma.min.css';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (callback: () => Promise<Good[]>) => {
    setGoods(await callback());
  };

  return (
    <div className="App box">
      <h1 className="title is-3">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-info is-rounded is-inverted"
        onClick={() => handleClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-info is-rounded is-inverted"
        onClick={() => handleClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-info is-rounded is-inverted"
        onClick={() => handleClick(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
