import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum ListVariable {
  all,
  five,
  red,
}

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);
  const [goodsListType, setGoodsListType] = useState<ListVariable>();

  useEffect(() => {
    switch (goodsListType) {
      case ListVariable.all:
        getAll().then(setGoodsList);
        break;
      case ListVariable.five:
        get5First().then(setGoodsList);
        break;
      case ListVariable.red:
        getRedGoods().then(setGoodsList);
        break;
      default:
        setGoodsList([]);
    }
  }, [goodsListType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setGoodsListType(ListVariable.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setGoodsListType(ListVariable.five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setGoodsListType(ListVariable.red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
