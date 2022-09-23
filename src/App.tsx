import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (getGoods: () => Promise<Good[]>) => {
    const receivedGoods = await getGoods();

    setGoods(receivedGoods);
  };

  return (
    <div className="App box">
      <h1 className="title has-text-link has-text-centered">
        Dynamic list of Goods
      </h1>

      <button
        type="button"
        className="button is-success mr-3"
        data-cy="all-button"
        onClick={() => handleClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        className="button is-warning mr-3"
        data-cy="first-five-button"
        onClick={() => handleClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="button is-danger"
        data-cy="red-button"
        onClick={() => handleClick(getRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
