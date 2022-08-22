import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [hasLoadingError, setLoadingError] = useState(false);

  const handleButtonClick = (func: () => Promise<Good[]>) => {
    func()
      .then(goodsList => setGoods(goodsList))
      .catch(() => setLoadingError(true));
  };

  return (
    <div className="App container">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          className="button btn btn-outline-primary"
          data-cy="all-button"
          onClick={() => handleButtonClick(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button btn btn-outline-primary"
          data-cy="first-five-button"
          onClick={() => handleButtonClick(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="button btn btn-outline-primary"
          type="button"
          data-cy="red-button"
          onClick={() => handleButtonClick(getRed)}
        >
          Load red goods
        </button>
      </div>

      {!hasLoadingError
        ? (goods && <GoodsList goods={goods} />)
        : (
          <div>
            Something went wrong, try later
          </div>
        )}
    </div>
  );
};
