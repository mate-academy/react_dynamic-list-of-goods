import React, { useState, memo } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma/css/bulma.css';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);
  const handleGetGoods = (loadedGoods: Promise<Good[]>) => (
    loadedGoods
      .then(setGoods)
  );

  return (
    <div className="App">
      <h1 className="title is-1 has-text-centered">Dynamic list of Goods</h1>

      <div className="App__buttons box has-text-centered">
        <button
          type="button"
          data-cy="all-button"
          className="button is-primary is-rounded"
          onClick={() => handleGetGoods(getAll())}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          className="button is-link is-rounded"
          onClick={() => handleGetGoods(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          className="button is-danger is-rounded"
          onClick={() => handleGetGoods(getRed())}
        >
          Load red goods
        </button>

      </div>

      {!goods.length ? (
        <p className="text">Press the button, please</p>
      ) : (
        <GoodsList goods={goods} />
      )}
    </div>
  );
});
