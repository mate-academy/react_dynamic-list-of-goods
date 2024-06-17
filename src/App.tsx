import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { ActiveButton } from './types/ActiveButton';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [activeButton, setActiveButton] = useState<ActiveButton>(null);

  useEffect(() => {
    const setList = (result: Good[]) => setGoods(result);

    if (activeButton === 'all') {
      getAll().then(setList);
    } else if (activeButton === 'first-five') {
      get5First().then(setList);
    } else if (activeButton === 'red') {
      getRedGoods().then(setList);
    }
  }, [activeButton]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setActiveButton('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setActiveButton('first-five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setActiveButton('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
