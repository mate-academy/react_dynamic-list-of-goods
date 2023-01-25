import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleButtonSubmit = async (loadedGoods: Promise<Good[]>) => {
    setVisibleGoods(await loadedGoods);
  };

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>
      <div className="App__container">
        <button
          className="App__button"
          type="button"
          data-cy="all-button"
          onClick={() => handleButtonSubmit(getAll())}
        >
          Load all goods
        </button>

        <button
          className="App__button"
          type="button"
          data-cy="first-five-button"
          onClick={() => handleButtonSubmit(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          className="App__button"
          type="button"
          data-cy="red-button"
          onClick={() => handleButtonSubmit(getRedGoods())}
        >
          Load red goods
        </button>
      </div>
      <GoodsList goods={visibleGoods} />
    </div>
  );
};
