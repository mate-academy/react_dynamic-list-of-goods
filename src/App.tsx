/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function showAll() {
    getAll()
      .then(shownGoods => {
        setGoods(shownGoods);
      });
  }

  function showFive() {
    get5First()
      .then(shownGoods => {
        setGoods(shownGoods);
      });
  }

  function showRed() {
    getRedGoods()
      .then(shownGoods => {
        setGoods(shownGoods);
      });
  }

  return (
    <>
      <button
        type="button"
        onClick={showAll}
      >
        All goods
      </button>

      <button
        type="button"
        onClick={showFive}
      >
        5 goods
      </button>

      <button
        type="button"
        onClick={showRed}
      >
        Red goods
      </button>

      <GoodList goods={goods} />
    </>
  );
};

export default App;
