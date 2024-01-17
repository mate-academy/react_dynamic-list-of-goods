import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import {
  getAll,
  get5First,
  getRedGoods,
} from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsArr, setGoodsArr] = useState<Good[]>([]);

  const handliClick = (click: string): void => {
    switch (click) {
      case 'first-five':
        get5First().then((data: Good[]) => setGoodsArr(data));
        break;
      case 'red':
        getRedGoods().then((data: Good[]) => setGoodsArr(data));
        break;
      default:
        getAll().then((data: Good[]) => setGoodsArr(data));
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handliClick('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handliClick('first-five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handliClick('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsArr} />
    </div>
  );
};
