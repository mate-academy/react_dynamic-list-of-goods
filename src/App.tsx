import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [good, setGoods] = useState<Good[]>([]);

  const heandleAllShow = () => {
    getAll().then(setGoods);
  };

  const heandle5Show = () => {
    get5First().then(setGoods);
  };

  const heandleRedShow = () => {
    getRedGoods('red').then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={heandleAllShow} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={heandle5Show} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={heandleRedShow} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={good} />
    </div>
  );
};
