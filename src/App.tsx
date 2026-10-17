import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

 import { getAll, get5First, getRed } from './api/goods';




export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const loadAllGoods = () => {
    getAll().then(setGoods);
  };
  const loadFiveFirst = () => {
    get5First().then(setGoods);
  };
  const loadRedGoods = () => {
    getRed().then(setGoods);
  };
  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button onClick={loadAllGoods} type="button" data-cy="all-button">
        Load all goods
      </button>
      <button onClick={loadFiveFirst} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>
      <button onClick={loadRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
