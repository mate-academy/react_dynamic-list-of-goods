import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function handleClick(condition: string): Promise<void> {
    try {
      let goodsList: Good[] = [];

      switch (condition) {
        case 'first five':
          goodsList = await get5First();
          break;
        case 'all':
          goodsList = await getAll();
          break;
        case 'red goods':
          goodsList = await getRedGoods();
          break;
        default:
          return;
      }

      setGoods(goodsList);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          handleClick('all');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          handleClick('first five');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleClick('red goods');
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
