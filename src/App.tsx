import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  const loadAll = async () => {
    setGoods(await getAll());
  };

  const load5First = async () => {
    setGoods(await get5First());
  };

  const loadRed = async () => {
    setGoods(await getRedGoods());
  };

  const visibleGoods = React.useMemo(() => {
    return goods;
  }, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAll} data-cy="all-button">
        Load all goods
      </button>

      <button type="button" onClick={load5First} data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" onClick={loadRed} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
