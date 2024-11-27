import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const setGoodsList = async (type: string) => {
    let fetchedGoods: Good[] = [];

    switch (type) {
      case 'all':
        fetchedGoods = await getAll();
        break;

      case 'five':
        fetchedGoods = await get5First();
        break;

        case 'red':
          fetchedGoods = await getRedGoods();
          break;
    };

    setGoods(fetchedGoods);
  }

  return (
  <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button type="button" data-cy="all-button" onClick={() => setGoodsList('all')}>
      Load all goods
    </button>

    <button type="button" data-cy="first-five-button" onClick={() => setGoodsList('five')}>
      Load 5 first goods
    </button>

    <button type="button" data-cy="red-button" onClick={() => setGoodsList('red')}>
      Load red goods
    </button>

    {goods.length > 0 && <GoodsList goods={goods} />}
  </div>
)};
