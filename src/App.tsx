import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {

  const [goodsList, setGoodsList] = useState<Good[]>([]);

  function showAllGoods() {
    getAll().then(response => setGoodsList(response));
  }

  function showFiveGoods() {
    get5First().then(response => setGoodsList(response));
  }

  function showRedGoods() {
    getRedGoods().then(response => setGoodsList(response));
  }
  return(
  <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button
      type="button" 
      data-cy="all-button"
      onClick={showAllGoods}
    >
      Load all goods
    </button>

    <button
      type="button" 
      data-cy="first-five-button"
      onClick={showFiveGoods}
    >
      Load 5 first goods
    </button>

    <button 
      type="button"
      data-cy="red-button"
      onClick={showRedGoods}
    >
      Load red goods
    </button>

    <GoodsList goods={goodsList} />
  </div>
  )
};
