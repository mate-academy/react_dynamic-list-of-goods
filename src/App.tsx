import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [areAllGoodsShown, setAreAllGoodsShown] = useState(false);
  const [areFirstGoodsShown, setAreFirstGoodsShown] = useState(false);
  const [areRedGoodsShown, setAreRedGoodsShown] = useState(false);

  useEffect(() => {
    if (areAllGoodsShown) {
      goodsAPI.getAll().then(setGoods);
      setAreFirstGoodsShown(false);
      setAreRedGoodsShown(false);
      setAreAllGoodsShown(false);
    }

    if (areFirstGoodsShown) {
      goodsAPI.get5First().then(setGoods);
      setAreFirstGoodsShown(false);
      setAreRedGoodsShown(false);
      setAreAllGoodsShown(false);
    }

    if (areRedGoodsShown) {
      goodsAPI.getRedGoods().then(setGoods);
      setAreFirstGoodsShown(false);
      setAreRedGoodsShown(false);
      setAreAllGoodsShown(false);
    }
  }, [areAllGoodsShown, areFirstGoodsShown, areRedGoodsShown]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setAreAllGoodsShown(true)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setAreFirstGoodsShown(true)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setAreRedGoodsShown(true)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
