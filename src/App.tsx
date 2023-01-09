import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleButtonClick = (getGoods: Promise<Good[]>) => (
    getGoods
      .then(setGoods)
  );

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>
      <div className="App__button-container">
        <button
          type="button"
          data-cy="all-button"
          className="App__button"
          onClick={() => handleButtonClick(getAll())}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => handleButtonClick(get5First())}
          className="App__button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => handleButtonClick(getRed())}
          className="App__button"
        >
          Load red goods
        </button>
      </div>
      {goods.length !== 0 && <GoodsList goods={goods} />}
    </div>
  );
};
