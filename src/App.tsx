import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);

  const handleClick = async (result: Promise<Good[]>) => {
    setSelectedGoods(await result);
  };

  return (
    <div className="App p-3">
      <h1 className="
        mb-5
        title
        is-3
        is-flex
        is-justify-content-center"
      >
        Dynamic list of Goods
      </h1>

      <div className="
        buttons
        mb-5
        is-flex
        is-justify-content-center"
      >
        <button
          type="button"
          data-cy="all-button"
          className="button is-primary mr-2"
          onClick={() => handleClick(getAll())}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          className="button is-warning mr-2"
          onClick={() => handleClick(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          className="button is-danger"
          onClick={() => handleClick(getRedGoods())}
        >
          Load red goods
        </button>
      </div>

      {selectedGoods && (
        <GoodsList goods={selectedGoods} />
      )}
    </div>
  );
};
