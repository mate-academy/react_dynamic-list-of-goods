import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import {
  getAllGoods,
  getFiveFirstGoods,
  getRedColorGoods,
} from './service/goods';
// or
// import * as goodsAPI from './api/goods';

enum GoodsOptions {
  ALL = 'Load all goods',
  FIRST_FIVE = 'Load 5 first goods',
  RED_GOODS = 'Load red goods',
}

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [updatePage, setUpdatePage] = useState(false);

  const handleGoods = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (event && event.currentTarget.innerHTML === GoodsOptions.ALL) {
      getAllGoods().then(goods => setVisibleGoods(goods));
    }

    if (event && event.currentTarget.innerHTML === GoodsOptions.FIRST_FIVE) {
      getFiveFirstGoods().then(goods => setVisibleGoods(goods));
    }

    if (event && event.currentTarget.innerHTML === GoodsOptions.RED_GOODS) {
      getRedColorGoods().then(goods => setVisibleGoods(goods));
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={e => {
          handleGoods(e);
          setUpdatePage(true);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={e => {
          handleGoods(e);
          setUpdatePage(true);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={e => {
          handleGoods(e);
          setUpdatePage(true);
        }}
      >
        Load red goods
      </button>

      {updatePage && <GoodsList goods={visibleGoods} />}
    </div>
  );
};
