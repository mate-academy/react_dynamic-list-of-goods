import React, { useState, useMemo } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

const initialGoods: Good[] = [];

export const App: React.FC = () => {
  const [preparedGoods, setPreparedGoods] = useState(initialGoods);

  const handleGoodsPrepare = async (goodsPreparator: () => Promise<Good[]>) => {
    const newGoods = await goodsPreparator();

    const prevStr = JSON.stringify(preparedGoods);
    const newStr = JSON.stringify(newGoods);

    if (prevStr !== newStr) {
      setPreparedGoods(newGoods);
    }
  };

  const goods = useMemo(() => preparedGoods, [preparedGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoodsPrepare(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoodsPrepare(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoodsPrepare(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
