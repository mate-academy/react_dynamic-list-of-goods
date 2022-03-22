import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onButtonClick = async (getGoods: () => Promise<Good[]>) => {
    const selectedGoods = await getGoods();

    setGoods(selectedGoods);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => onButtonClick(getAll)}
        type="button"
      >
        Load All goods
      </button>

      <button
        onClick={() => onButtonClick(get5First)}
        type="button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => onButtonClick(getRedGoods)}
        type="button"
      >
        Load red goods
      </button>

      {(goods.length > 0) && (
        <GoodsList goods={goods} />
      )}
    </>
  );
};
