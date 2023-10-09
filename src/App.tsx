import React, { useState } from 'react';

import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { LoadParameter } from './types/LoadParameter';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleClick = (loadParameter: LoadParameter) => {
    let promise: Promise<Good[]>;

    switch (loadParameter) {
      case LoadParameter.All:
        promise = getAll();
        break;

      case LoadParameter.FiveFirst:
        promise = get5First();
        break;

      case LoadParameter.Red:
        promise = getRedGoods();
        break;

      default:
        throw new Error('Wrong load parameter!');
    }

    promise.then(setVisibleGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(LoadParameter.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(LoadParameter.FiveFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(LoadParameter.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
