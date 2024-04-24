/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// ors
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [buttonAll, setButtonAll] = useState(false);
  const [buttonFiveFirst, setButtonFiveFirst] = useState(false);
  const [buttonRed, setButtonRed] = useState(false);

  useEffect(() => {
    if (buttonAll) {
      getAll().then(setGoods);
      setButtonAll(false);
    } else if (buttonFiveFirst) {
      get5First().then(setGoods);
      setButtonFiveFirst(false);
    } else if (buttonRed) {
      getRedGoods().then(setGoods);
      setButtonRed(false);
    }
  }, [buttonAll, buttonFiveFirst, buttonRed]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setButtonAll(true)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setButtonFiveFirst(true)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setButtonRed(true)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
