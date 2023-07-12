import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [color, setColor] = useState('');

  useEffect(() => {
    getAll().then();
  });

  const handleAll = () => {
    setColor('black');

    return getAll().then((goodsData) => setGoods(goodsData));
  };

  const handle5 = () => {
    setColor('black');

    return get5First().then((goodsData) => setGoods(goodsData));
  };

  const handleRed = () => {
    setColor('red');

    return getRedGoods().then((goodsData) => setGoods(goodsData));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} color={color} />
    </div>
  );
};
