import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (callback: () => Promise<Good[]>) => {
    const receivedGoods = await callback();

    setGoods(receivedGoods);
  };

  return (
    <div className="App box">
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          className="button is-success is-inverted"
          data-cy="all-button"
          onClick={() => handleClick(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          className="button is-link  is-inverted"
          onClick={() => handleClick(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          className="button is-danger is-inverted"
          onClick={() => handleClick(getRedGoods)}
        >
          Load red goods
        </button>

      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
