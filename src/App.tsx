import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [listOfGoods, setListOfGoods] = useState<Good[]>([]);

  const handleAllBtn = () => {
    getAll().then(allGoods => {
      setListOfGoods(allGoods);
    });
  };

  const handleFirstFiveBtn = () => {
    get5First().then(goods => {
      setListOfGoods(goods);
    });
  };

  const handleOnlyRedBtn = () => {
    getRedGoods().then(goods => {
      setListOfGoods(goods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllBtn}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveBtn}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleOnlyRedBtn}
      >
        Load red goods
      </button>

      {listOfGoods.length > 0 && (
        <GoodsList goods={listOfGoods} />
      )}
    </div>
  );
};
