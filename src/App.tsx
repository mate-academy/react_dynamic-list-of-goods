import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [showList, setShowList] = useState(false);

  function allClick() {
    getAll().then(response => {
      setGoods(response);
    });
    setShowList(true);
  }

  function firstFiveList() {
    get5First().then(response => {
      setGoods(response);
    });
    setShowList(true);
  }

  function showAllRed() {
    getRedGoods().then(response => {
      setGoods(response);
    });
    setShowList(true);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="allButtom"
        onClick={allClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="firstFive"
        onClick={firstFiveList}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="allRed"
        onClick={showAllRed}
      >
        Load red goods
      </button>

      {showList && <GoodsList goods={goods} />}
    </div>
  );
};
