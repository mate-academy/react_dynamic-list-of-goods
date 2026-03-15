import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [storedGoods, setStoredGoods] = React.useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll().then(goods => {
      setStoredGoods(goods);
    });
  };

  const handleFirstFiveGoods = () => {
    get5First().then(goods => {
      setStoredGoods(goods);
    });
  };

  const handleAllRedGoods = () => {
    getRedGoods().then(goods => {
      setStoredGoods(goods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleAllRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={storedGoods} />
    </div>
  );
};
