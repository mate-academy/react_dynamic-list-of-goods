import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  // an alternative way of getting the api data without .then:

  // const handleGetAll = async () => {
  //   const goods = await getAll();

  //   setVisibleGoods(goods);
  // };

  // const handleGet5First = async () => {
  //   const goods = await get5First();

  //   setVisibleGoods(goods);
  // };

  // const handleGetRedGoods = async () => {
  //   const goods = await getRedGoods();

  //   setVisibleGoods(goods);
  // };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(goods => setVisibleGoods(goods))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(goods => setVisibleGoods(goods))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(goods => setVisibleGoods(goods))}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
