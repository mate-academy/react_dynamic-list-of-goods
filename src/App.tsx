import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isFive, setIsFive] = useState(false);
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    if (isFive) {
      get5First().then(products => setGoods(products));
    }

    if (isRed) {
      getRedGoods().then(products => setGoods(products));
    }

    if (!isFive && !isRed) {
      getAll().then(products => setGoods(products));
    }
  }, [isFive, isRed]);

  const allGoodsHandler = () => {
    setIsRed(false);
    setIsFive(false);
  };

  const FirstFiveGoodsHandler = () => {
    setIsRed(false);
    setIsFive(true);
  };

  const redGoodsHandler = () => {
    setIsFive(false);
    setIsRed(true);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={allGoodsHandler}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={FirstFiveGoodsHandler}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={redGoodsHandler}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
