import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllButtonClick = async () => {
    const data = await getAll();

    // console.log('data data data data', data);

    return setGoods(data);
  };

  const handleFirstFive = async () => {
    const firstFive = await get5First();

    // console.log('firstFive firstFive firstFive firstFive', firstFive);

    return setGoods(firstFive);
  };

  const handleRed = async () => {
    const onlyRed = await getRedGoods();

    // console.log('onlyRed onlyRed onlyRed onlyRed', onlyRed);

    return setGoods(onlyRed);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllButtonClick}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
