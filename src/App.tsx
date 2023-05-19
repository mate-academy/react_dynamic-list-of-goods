import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [funcGoods, setFuncGoods] = useState(getAll());

  useEffect(() => {
    const loadGoods = async () => {
      const goodsData = await funcGoods;

      setGoods(goodsData);
    };

    loadGoods();
  }, [funcGoods]);

  const handleClickAll = () => {
    setFuncGoods(getAll());
  };

  const handleClickFirst5 = () => {
    setFuncGoods(get5First());
  };

  const handleClickReds = () => {
    setFuncGoods(getRedGoods());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickFirst5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleClickReds}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
