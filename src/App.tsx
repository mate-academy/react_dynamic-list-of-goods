import React, { useState } from 'react';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma/css/bulma.min.css';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadGoods = (callback: () => Promise<Good[]>) => {
    callback()
      .then(good => {
        setGoods(good);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        className="button is-success"
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        className="button is-info"
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-danger"
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
