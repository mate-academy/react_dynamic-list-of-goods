import React, { useState, memo } from 'react';
import './styles/App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);
  const handleGetGoods = (loadedGoods: Promise<Good[]>) => (
    loadedGoods
      .then(setGoods)
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button
          type="button"
          data-cy="all-button"
          className="button"
          onClick={() => handleGetGoods(getAll())}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          className="button"
          onClick={() => handleGetGoods(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          className="button"
          onClick={() => handleGetGoods(getRedGoods())}
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
