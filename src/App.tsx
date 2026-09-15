import React, { useState } from 'react';

import './App.scss';

import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';

const loaders = {
  all: getAll,
  firstFive: get5First,
  red: getRedGoods,
};

type LoadType = keyof typeof loaders;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleClick = (type: LoadType) => {
    setHasError(false);

    loaders[type]()
      .then(setGoods)
      .catch(() => setHasError(true));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick('firstFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick('red')}
      >
        Load red goods
      </button>

      {hasError && <p>Something went wrong! Try again</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
