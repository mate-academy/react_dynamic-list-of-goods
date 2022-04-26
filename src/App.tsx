import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Item } from './components/types';
import { GoodsList } from './components/GoodsList/GoodsList';

enum OutputWay { None, All, FirstQuant, OnlyColor }
type OutputGoods = () => Promise<Good[]>;

export const App: React.FC = React.memo(() => {
  const [goods, setGoods]
    = useState<Item[]>((): Item[] => []);
  const [fetchType, setFetchType]
    = useState<OutputWay>(OutputWay.None);

  const getGoods = (
    howToGet: OutputGoods,
    newFetchType: OutputWay = OutputWay.None,
  ) => () => {
    if (fetchType !== newFetchType) {
      howToGet().then((goodsFromServer) => setGoods(goodsFromServer));
      setFetchType(newFetchType);
    }
  };

  return (
    <>
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        className="button"
        onClick={getGoods(getAll, OutputWay.All)}
      >
        load all goods
      </button>
      <button
        type="button"
        className="button"
        onClick={getGoods(get5First, OutputWay.FirstQuant)}
      >
        load 5 goods
      </button>
      <button
        type="button"
        className="button"
        onClick={getGoods(getRedGoods, OutputWay.OnlyColor)}
      >
        load red goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
});
