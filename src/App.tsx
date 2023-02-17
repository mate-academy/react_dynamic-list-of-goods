import React, { useState } from 'react';
import { Good } from './types/Good';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsToRender, setGoodsToRender] = useState<Good[]>([]);

  async function clickHandler(event:React.MouseEvent<HTMLButtonElement>) {
    const target = event?.target as HTMLButtonElement;

    if (!target) {
      return;
    }

    let goods:Good[];

    switch (target.dataset.cy) {
      case 'all-button':
        goods = await getAll();
        break;
      case 'first-five-button':
        goods = await get5First();
        break;
      case 'red-button':
        goods = await getRedGoods();
        break;
      default:
        goods = [];
    }

    setGoodsToRender(goods);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={clickHandler}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={clickHandler}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={clickHandler}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsToRender} />
    </div>
  );
};
