import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [listOfSomeGoods, setListOfSomeGoods] = useState<Good[]>([]);

  function getAllButton() {
    getAll().then(data => {
      setListOfSomeGoods(data);
    });
  }

  function get5FirstButton() {
    get5First().then(data => {
      setListOfSomeGoods(data);
    });
  }

  function getRedGoodsButton() {
    getRedGoods().then(data => {
      setListOfSomeGoods(data);
    });
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllButton}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstButton}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getRedGoodsButton}>
        Load red goods
      </button>

      <GoodsList goods={listOfSomeGoods} />
    </div>
  );
};
