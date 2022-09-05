import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = useCallback((getFunction) => {
    getFunction()
      .then((goodsL: Good[]) => setGoods(goodsL));
  }, []);

  return (
    <div className="App">
      <h1
        className="title is-2"
      >
        Dynamic list of Goods
      </h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-primary"
        onClick={() => handleClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-link"
        onClick={() => handleClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger"
        onClick={() => handleClick(getRed)}
      >
        Load red goods
      </button>

      {goods && <GoodsList goods={goods} />}
    </div>
  );
};
