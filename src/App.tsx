import React, { useState } from 'react';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

import 'bulma/css/bulma.css';
import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (selectGood: () => Promise<Good[]>) => {
    setGoods(await selectGood());
  };

  return (
    <div className="App box">
      <h1 className="title is-2">Dynamic list of Goods</h1>

      <button
        className="button is-info is-light mr-2"
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(getAll)}
      >
        Load all goods
      </button>

      <button
        className="button is-warning is-light mr-2"
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-danger is-light mr-2"
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
