import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isClicked, setIsClicke] = useState(false);

  const handleGetGoods = (action: () => Promise<Good[]>) => {
    action()
      .then(value => {
        setGoods(value);
      });
    setIsClicke(true);
  };

  return (
    <div className="App mt-4 ml-4">
      <h1 className="title has-text-dark">Dynamic list of Goods</h1>
      <div className="buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => handleGetGoods(getAll)}
          className="button is-primary is-medium"
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => handleGetGoods(get5First)}
          className="button is-primary is-medium"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => handleGetGoods(getRedGoods)}
          className="button is-primary is-medium"
        >
          Load red goods
        </button>
      </div>
      {isClicked
      && (<GoodsList goods={goods} />)}

    </div>
  );
};
