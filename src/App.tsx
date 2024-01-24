import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [items, setItems] = React.useState<Good[]>([]);

  const handelBtnClick = (buttonType: string) => {
    switch (buttonType) {
      case 'all-button':
        getAll().then(goods => setItems(goods));
        break;
      case 'first-five-button':
        get5First().then(goods => setItems(goods));
        break;
      case 'red-button':
        getRedGoods().then(goods => setItems(goods));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handelBtnClick('all-button')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handelBtnClick('first-five-button')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handelBtnClick('red-button')}
      >
        Load red goods
      </button>

      <GoodsList goods={items} />
    </div>
  );
};
