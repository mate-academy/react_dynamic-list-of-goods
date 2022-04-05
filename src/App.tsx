import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types';
import { GoodsList } from './components/GoodsList';

enum FetchType { none, all, firstFive, onlyRed }
type FetchCb = () => Promise<Good[]>;

export const App: React.FC = React.memo(() => {
  const [goods, setGoods] = useState<Good[]>((): Good[] => []);
  const [fetchType, setFetchType] = useState<FetchType>(FetchType.none);

  const getGoods = (fetchCb: FetchCb, newFetchType: FetchType = FetchType.none) => () => {
    if (fetchType !== newFetchType) {
      fetchCb().then((goodsFromServer) => setGoods(goodsFromServer));
      setFetchType(newFetchType);
    }
  };

  return (
    <>
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        className="button is-link"
        onClick={getGoods(getAll, FetchType.all)}
      >
        load all goods
      </button>
      <button
        type="button"
        className="button is-link"
        onClick={getGoods(get5First, FetchType.firstFive)}
      >
        load 5 goods
      </button>
      <button
        type="button"
        className="button is-link"
        onClick={getGoods(getRedGoods, FetchType.onlyRed)}
      >
        load red goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
});
